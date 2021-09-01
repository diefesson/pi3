const pool = require("../dbs/postgres");

exports.login = async (username, password) => {
  const resul = await pool.query(
    "SELECT username from users WHERE username = ($1) AND password = ($2);",
    [username, password]
  );
  if (resul.rowCount == 1) {
    return resul.rows;
  }
  else return false;
};
