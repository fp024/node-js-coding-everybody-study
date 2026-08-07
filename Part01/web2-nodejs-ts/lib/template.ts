export function HTML(title: string, list: string, body: string, control: string): string {
  return `
    <!doctype html>
    <html lang="en">
    <head>
      <title>WEB2 - ${title}</title>
      <meta charset="utf-8">
    </head>
    <body>
      <h1><a href="/">WEB2</a></h1>
      ${list}
      ${control}
      ${body}
    </body>
    </html>
    `;
}

export function list(filelist: string[]): string {
  let html = '<ul>';
  let i = 0;
  while (i < filelist.length) {
    html = html + `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
    i = i + 1;
  }
  return html + '</ul>';
}
