const pool = require("../dbs/postgres");

exports.save = async (post) => {
  const result = await pool.query(
    "INSERT INTO posts(description,img,ongId) VALUES ($1,$2,$3) RETURNING *;",
    [post.description, post.img,post.ongId]
  );
  return result.rows[0];
};

exports.findAll = async () => {
  const result = await pool.query("SELECT posts.description,posts.img,ongs.name,ongs.img FROM posts, ongs WHERE posts.ongId. = ongs.id;");
  return result.rows;
};

exports.findOne = async (id) => {
  const result = await pool.query("SELECT * FROM posts WHERE id=$1;", [id]);
  return result.rows[0];
};

exports.findByName = async (name) => {
  const result = await pool.query("SELECT posts.description,posts.img,ongs.id,ongs.name,ongs.img FROM posts, ongs WHERE ongs.name = $1;", [
    name,
  ]);
  return result.rows;
};

exports.update = async (id, post) => {
  const result = await pool.query(
    "UPDATE posts SET description=$1, img=$2, ong=$3 WHERE id=$4 RETURNING *;",
    [post.description, post.img,post.ongId,id]
  );
  return result.rows[0];
};

exports.delete = async (id) => {
  await pool.query("DELETE FROM posts WHERE id=$1;", [id]);
};
