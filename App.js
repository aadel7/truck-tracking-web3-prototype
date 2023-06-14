const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('*', (req, res) => {
  res.status(404).send('404 - Recurso no encontrado');
});

app.listen(3000, () => {
  console.log('El servidor está corriendo en http://localhost:3000/');
});
