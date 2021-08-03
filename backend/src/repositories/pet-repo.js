const pool = require("../dbs/postgres");

exports.save = async (pet) => {
  const result = await pool.query(
    "INSERT INTO pets(race,sex,age,status) VALUES ($1,$2,$3,$4) RETURNING *;",
    [pet.race, pet.Sex,pet.Age,pet.Status]
  );
  return result.rows[0];
};

exports.findAll = async () => {
  const result = await pool.query("SELECT * FROM pets;");
  return result.rows;
};

exports.findOne = async (id) => {
  const result = await pool.query("SELECT * FROM pets WHERE id=$1;", [id]);
  return result.rows[0];
};

exports.findByRace = async (race) => {
  const result = await pool.query("SELECT * FROM pets WHERE race=$1;", [
    race,
  ]);
  return result.rows;
};

exports.findBySex = async (sex) => {
  const result = await pool.query("SELECT * FROM pets WHERE sex=$1;", [
    sex,
  ]);
  return result.rows;
};


exports.update = async (id, pet) => {
  const result = await pool.query(
    "UPDATE pets SET race=$1, sex=$2, age=$3, status=$4 WHERE id=$5 RETURNING *;",
    [pet.race,pet.Sex,pet.Age,pet.Status,id]
  );
  return result.rows[0];
};

exports.delete = async (id) => {
  await pool.query("DELETE FROM pets WHERE id=$1;", [id]);
};
