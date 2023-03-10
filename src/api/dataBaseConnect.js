
const mysql = require("mysql2");
const connection = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    database: "sport_database",
    password: "root"
});
// тестирование подключения
connection.connect(function (err) {
    if (err) {
        return console.error("Ошибка: " + err.message);
    }
    else {
        console.log("Подключение к серверу MySQL успешно установлено");
    }
});
module.exports = {connection}


// // закрытие подключения
// connection.end(function (err) {
//     if (err) {
//         return console.log("Ошибка: " + err.message);
//     }
//     console.log("Подключение закрыто");
// });