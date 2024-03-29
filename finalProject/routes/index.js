var express = require('express');
var router = express.Router();

//CREATE TABLE IF NOT EXISTS quote (email TEXT, password TEXT)

const sqlite = require('sqlite3').verbose();
db = new sqlite.Database("./db.sqlite", sqlite.OPEN_READWRITE, (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the database.');
});

router.post('/', (req, res) => {
  const {email, password}=req.body;
  sql = "INSERT INTO quote (email, password) VALUES (?, ?)";
  db.run(sql, [email, password], (err) => {
    if (err) {
      console.error(err.message);
      return res.status(500).send(err.message);
    }
    console.log('inserted');
  });
  //res.redirect('/index.html');
  //res.send('inserted');
})

router.get('/', function(req, res, next) {
  sql= "SELECT * FROM quote";
  db.all(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    res.send(rows);
  });
});

module.exports = router;
