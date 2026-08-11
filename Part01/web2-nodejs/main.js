import http from 'node:http';
import fs from 'node:fs';
import { URL } from 'node:url';
import qs from 'node:querystring';
import path from 'node:path';
import sanitizeHtml from 'sanitize-html';
import template from './lib/template.js';

const app = http.createServer(function (request, response) {
  const _url = request.url;
  const _myURL = new URL(_url, `http://${request.headers.host}`);
  const queryData = Object.fromEntries(_myURL.searchParams.entries());
  const pathname = _myURL.pathname;

  if (pathname === '/') {
    if (queryData.id === undefined) {
      fs.readdir('./data', function (error, filelist) {
        const title = 'Welcome';
        const description = 'Hello, Node.js';
        const list = template.list(filelist);
        const html = template.HTML(
          title,
          list,
          `<h2>${title}</h2><p>${description}</p>`,
          `<a href="/create">create</a>`
        );
        response.writeHead(200);
        response.end(html);
      });
    } else {
      fs.readdir('./data', function (error, filelist) {
        const list = template.list(filelist);
        const filteredId = path.parse(queryData.id).base;
        fs.readFile(`data/${filteredId}`, 'utf8', function (err, description) {
          const title = filteredId;
          const sanitizeTitle = sanitizeHtml(title);
          const sanitizeDescription = sanitizeHtml(description);

          const html = template.HTML(
            title,
            list,
            `<h2>${sanitizeTitle}</h2><p>${sanitizeDescription}</p>`,
            `<a href="/create">create</a> 
             <a href="/update?id=${sanitizeTitle}">update</a> 
             <form action="delete_process" method="post" onsubmit="return confirm('${sanitizeTitle} 문서를 정말로 삭제하시겠습니까?');">
               <input type="hidden" name="id" value="${sanitizeTitle}">
               <input type="submit" value="delete">
             </form>`
          );
          response.writeHead(200);
          response.end(html);
        });
      });
    }
  } else if (pathname === '/create') {
    fs.readdir('./data', function (error, filelist) {
      const title = 'WEB - create';
      const list = template.list(filelist);
      const html = template.HTML(
        title,
        list,
        `
        <form action="/create_process" method="post">
          <p><input type="text" name="title" placeholder="title"></p>
          <p>
            <textarea name="description" placeholder="description"></textarea>
          </p>
          <p>
            <input type="submit">
          </p>
        </form>      
      `,
        ''
      );
      response.writeHead(200);
      response.end(html);
    });
  } else if (pathname === '/create_process') {
    let body = '';
    request.on('data', function (data) {
      body = body + data;
    });

    request.on('end', function () {
      const post = qs.parse(body);
      const title = post.title;
      const description = post.description;
      fs.writeFile(`data/${title}`, description, 'utf8', function (err) {
        const encodeTitle = encodeURI(title);
        response.writeHead(302, { Location: `/?id=${encodeTitle}` });
        response.end('success');
      });
    });
  } else if (pathname === '/update') {
    fs.readdir('./data', function (error, filelist) {
      const list = template.list(filelist);
      const filteredId = path.parse(queryData.id).base;
      fs.readFile(`data/${filteredId}`, 'utf8', function (err, description) {
        const title = filteredId;
        const html = template.HTML(
          title,
          list,
          `
          <form action="/update_process" method="post">
            <input type="hidden" name="id" value=${title}>
            <p><input type="text" name="title" placeholder="title" value=${title}></p>
            <p>
              <textarea name="description" placeholder="description">${description}</textarea>
            </p>
            <p>
              <input type="submit">
            </p>
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
    request.on('data', function (data) {
      body = body + data;
    });

    request.on('end', function () {
      const post = qs.parse(body);
      const title = post.title;
      const description = post.description;
      const filteredId = path.parse(post.id).base;
      fs.rename(`data/${filteredId}`, `data/${title}`, function (error) {
        fs.writeFile(`data/${title}`, description, 'utf8', function (err) {
          const encodeTitle = encodeURI(title);
          response.writeHead(302, { Location: `/?id=${encodeTitle}` });
          response.end('success');
        });
      });
    });
  } else if (pathname === '/delete_process') {
    let body = '';
    request.on('data', function (data) {
      body = body + data;
    });

    request.on('end', function () {
      const post = qs.parse(body);
      const filteredId = path.parse(post.id).base;
      fs.unlink(`data/${filteredId}`, function (error) {
        response.writeHead(302, { Location: `/` });
        response.end();
      });
    });
  } else {
    response.writeHead(404);
    response.end('Not found');
  }
});
app.listen(3000); // 웹 포트 설정
