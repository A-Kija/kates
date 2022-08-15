const express = require('express');
const app = express();
const port = 3003;

const mysql = require("mysql");
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "zoo2",
});


app.get('/list', (req, res) => {

    const sql = `
    SELECT
    id, animal, weight
    FROM animals
    ORDER BY animal
  `;
    con.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    });

});



app.listen(port, () => {
    console.log(`Bebras klauso ${port} porto`)
})