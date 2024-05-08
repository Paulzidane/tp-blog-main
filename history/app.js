const express = require('express');
const app = express();
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'bank'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database: ', err);
    return;
  }
  console.log('Connected to database!');
});

app.get('/update-history', (req, res) => {
  const sql = "SHOW BINLOG EVENTS IN 'mysql-bin.000001'";
  connection.query(sql, (err, result) => {
    if (err) {
      console.error('Error executing SQL query: ', err);
      res.status(500).send('Error fetching update history');
      return;
    }
    res.json(result);
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
