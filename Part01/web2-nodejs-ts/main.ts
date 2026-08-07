import http from 'http';
import fs from 'fs';
import { URL } from 'url';
import qs from 'querystring';
import path from 'path';
import sanitizeHtml from 'sanitize-html';
import * as template from './lib/template';

type QueryValue = string | string[] | undefined;

function asString(value: QueryValue): string {
  return Array.isArray(value) ? (value[0] ?? '') : (value ?? '');
}

const app = http.createServer((request, response) => {
  const requestUrl = request.url ?? '/';
  const requestURL = new URL(requestUrl, `http://${request.headers.host ?? 'localhost'}`);
  const queryData = Object.fromEntries(requestURL.searchParams.entries());
  const pathname = requestURL.pathname;

  if (pathname === '/') {
    fs.readdir('./data', (_error, filelist) => {
      const list = template.list(filelist);

      if (queryData.id === undefined) {
        const title = 'Welcome';
        const description = 'Hello, Node.js';
        const html = template.HTML(
          title,
          list,
          `<h2>${title}</h2><p>${description}</p>`,
          `<a href="/create">create</a>`
        );
        response.writeHead(200);
        response.end(html);
        return;
      }

      const filteredId = path.parse(queryData.id).base;
      fs.readFile(`data/${filteredId}`, 'utf8', (_err, description) => {
        const title = filteredId;
        const safeTitle = sanitizeHtml(title);
        const safeDescription = sanitizeHtml(description);
        const html = template.HTML(
          title,
          list,
          `<h2>${safeTitle}</h2><p>${safeDescription}</p>`,
          `<a href="/create">create</a>
             <a href="/update?id=${safeTitle}">update</a>
             <form action="delete_process" method="post" onsubmit="return confirm('${safeTitle} 문서를 정말로 삭제하시겠습니까?');">
               <input type="hidden" name="id" value="${safeTitle}">
               <input type="submit" value="delete">
             </form>`
        );
        response.writeHead(200);
        response.end(html);
      });
    });
  } else if (pathname === '/create') {
    fs.readdir('./data', (_error, filelist) => {
      const title = 'WEB - create';
      const html = template.HTML(
        title,
        template.list(filelist),
        `
        <form action="/create_process" method="post">
          <p><input type="text" name="title" placeholder="title"></p>
          <p><textarea name="description" placeholder="description"></textarea></p>
          <p><input type="submit"></p>
        </form>
      `,
        ''
      );
      response.writeHead(200);
      response.end(html);
    });
  } else if (pathname === '/create_process') {
    let body = '';
    request.on('data', (data) => {
      body += data.toString();
    });
    request.on('end', () => {
      const post = qs.parse(body);
      const title = asString(post.title);
      const description = asString(post.description);
      fs.writeFile(`data/${title}`, description, 'utf8', () => {
        response.writeHead(302, { Location: `/?id=${encodeURI(title)}` });
        response.end('success');
      });
    });
  } else if (pathname === '/update') {
    fs.readdir('./data', (_error, filelist) => {
      const list = template.list(filelist);
      const filteredId = path.parse(asString(queryData.id)).base;
      fs.readFile(`data/${filteredId}`, 'utf8', (_err, description) => {
        const title = filteredId;
        const html = template.HTML(
          title,
          list,
          `
          <form action="/update_process" method="post">
            <input type="hidden" name="id" value="${title}">
            <p><input type="text" name="title" placeholder="title" value="${title}"></p>
            <p><textarea name="description" placeholder="description">${description}</textarea></p>
            <p><input type="submit"></p>
          </form>
          `,
          `<a href="/create">create</a> <a href="/update?id=${title}">update</a>`
        );
        response.writeHead(200);
        response.end(html);
      });
    });
  } else if (pathname === '/update_process') {
    let body = '';
    request.on('data', (data) => {
      body += data.toString();
    });
    request.on('end', () => {
      const post = qs.parse(body);
      const title = asString(post.title);
      const description = asString(post.description);
      const filteredId = path.parse(asString(post.id)).base;
      fs.rename(`data/${filteredId}`, `data/${title}`, () => {
        fs.writeFile(`data/${title}`, description, 'utf8', () => {
          response.writeHead(302, { Location: `/?id=${encodeURI(title)}` });
          response.end('success');
        });
      });
    });
  } else if (pathname === '/delete_process') {
    let body = '';
    request.on('data', (data) => {
      body += data.toString();
    });
    request.on('end', () => {
      const post = qs.parse(body);
      const filteredId = path.parse(asString(post.id)).base;
      fs.unlink(`data/${filteredId}`, () => {
        response.writeHead(302, { Location: '/' });
        response.end();
      });
    });
  } else {
    response.writeHead(404);
    response.end('Not found');
  }
});

app.listen(3000); // 웹 포트 설정
