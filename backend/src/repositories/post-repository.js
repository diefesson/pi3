const pool = require("../dbs/postgres");

exports.findAll = async () => {
  const resul = await pool.query(
    "SELECT posts.id,posts.title, posts.description,posts.imgurl,posts.petid,ongs.name FROM posts,ongs WHERE posts.ongid = ongs.id;"
  );
  return resul.rows.map(postMapper);
};

function postMapper(row) {
  return {
    id: row.id,
    title: row.title,
    description: row.description,
    imgurl: row.imgurl,
    petid: row.petid,
    ong: {
      name: row.name,
    },
  };
}

exports.findById = async (id) => {
  const resul = await pool.query(
    "SELECT posts.id, posts.title, posts.description,posts.imgurl,posts.petid,ongs.name FROM posts,ongs WHERE posts.id=$1 AND posts.ongid = ongs.id;",
    [id]
  );
  return resul.rows.map(postMapper);
};

exports.save = async (post) => {
  const resul = await pool.query(
    "INSERT INTO posts(title,description,imgurl,ongid,petid) VALUES ($1,$2,$3,$4,$5) RETURNING *;",
    [post.title, post.description, post.imgurl, post.ongid, post.petid]
  );
  return resul.rows[0];
};

exports.update = async (id, post) => {
  const result = await pool.query(
    "UPDATE posts SET title=$1,description=$2, imgurl=$3, ongid=$4,petid=$5 WHERE id=$6 RETURNING *;",
    [post.title, post.description, post.imgurl, post.ongid, post.petid, id]
  );
  return result.rows[0];
};

exports.delete = async (id) => {
  await pool.query("DELETE FROM posts WHERE id=$1;", [id]);
};
