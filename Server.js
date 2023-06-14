const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    // Si la solicitud es para la raíz, servimos el archivo index.html
    fs.readFile('./public/index.html', (err, html) => {
      if (err) {
        throw err;
      }
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      res.write(html);
      res.end();
    });
  } else {
    // Si la solicitud es para cualquier otro recurso, respondemos con un 404
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('404 - Recurso no encontrado');
  }
});

server.listen(3000, () => {
  console.log('El servidor está corriendo en http://localhost:3000/');
});
