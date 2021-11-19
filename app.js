// подключение express
const express = require("express");
var xlsx = require('node-xlsx');

const app = express(); //Line 2
const port = process.env.PORT || 5000; //Line 3

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`));
// определяем обработчик для маршрута "/"
app.get("/getFileSerial", function (request, response) {
  // отправляем ответ
  var obj = xlsx.parse(__dirname + "/Serialy.xlsx"); // parses a file
  response.send(obj);
});

app.get("/getFileFilm", function (request, response) {
  // отправляем ответ
  var obj = xlsx.parse(__dirname + "/Filmy.xlsx"); // parses a file
  response.send(obj);
});

// начинаем прослушивать подключения на 3000 порту
// app.listen(3000);
