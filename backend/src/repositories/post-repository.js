const pool = require("../dbs/postgres");

exports.findAll = async () => {
  const resul = await pool.query("SELECT * FROM posts;");
  return resul.rows;
};

exports.findById = async (id) => {
  const resul = await pool.query("SELECT * FROM posts WHERE id=$1;", [id]);
  return resul.rows[0];
};

exports.save = async (post) => {
 const resul = await pool.query(
    "INSERT INTO posts(title,description,imgurl,ongid) VALUES ($1,$2,$3,$4) RETURNING *;",
    [post.title,post.description,post.imgurl,post.ongid]
  );
  return resul.rows[0];

};

exports.update = async (id, post) => {
    const result = await pool.query(
      "UPDATE posts SET title=$1 description=$2, img=$3, ongid=$4 WHERE id=$5 RETURNING *;",
      [post.title,post.description, post.imgurl,post.ongid,id]
    );
    return result.rows[0];
  };
  
  exports.delete = async (id) => {
    await pool.query("DELETE FROM posts WHERE id=$1;", [id]);
  };
