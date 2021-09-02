const pool = require("../dbs/postgres");

exports.findAll = async () => {
  const resul = await pool.query(
    "SELECT pets.id, pets.race,pets.age,pets.sex,pets.status,ongs.name FROM pets,ongs WHERE ongs.id = pets.ongid;"
  );
  return resul.rows;
};

exports.findById = async (id) => {
  const resul = await pool.query("SELECT * FROM pets WHERE id=$1;", [id]);
  return resul.rows[0];
};

exports.findByRace = async (race) => {
  const resul = await pool.query("SELECT * FROM pets WHERE race=$1;", [race]);
  return resul.rows[0];
};

exports.findBySex = async (sex) => {
  const resul = await pool.query("SELECT * FROM pets WHERE sex=$1;", [sex]);
  return resul.rows[0];
};

exports.findByAge = async (age) => {
  const resul = await pool.query("SELECT * FROM pets WHERE age=$1;", [age]);
  return resul.rows[0];
};

exports.findByOng = async (ongid) => {
  const resul = await pool.query("SELECT * FROM pets WHERE ongid=$1;", [ongid]);
  return resul.rows[0];
};

exports.save = async (pet) => {
  const resul = await pool.query(
    "INSERT INTO pets(title,race,age,sex,status,ongid) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *;",
    [pet.title,pet.race, pet.age, pet.sex, pet.status,pet.ongid]
  );
  return resul.rows[0];
};

exports.update = async (id, pet) => {
  const result = await pool.query(
    "UPDATE pets SET race=$1, age=$2,sex=$3,status=$4, ongid=$5,title=$6 WHERE id=$7 RETURNING *;",
    [pet.race, pet.age, pet.sex, pet.status,pet.ongid,pet.title, id]
  );
  return result.rows[0];
};

exports.delete = async (id) => {
  await pool.query("DELETE FROM pets WHERE id=$1;", [id]);
};
