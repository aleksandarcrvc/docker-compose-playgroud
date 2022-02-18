const express = require("express");
const app = express();
const port = 3001;
var cors = require("cors");

app.use(cors());

const Pool = require("pg").Pool;
const pool = new Pool({
  host: "db",
  user: "myuser",
  database: "mydb",
  password: "mypassword",
  port: 5432,
});

app.get("/accounts", async (req, res) => {
  try {
    const results = await pool.query("SELECT * FROM ACCOUNTS");
    res.json(results.rows);
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
