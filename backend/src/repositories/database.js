const orgs = [
  {
    id: 0,
    name: "Ong teste",
    image: "https://via.placeholder.com/150",
  },
];

const users = [
  {
    id: 0,
    orgId: 0,
    username: "diefesson",
    password: "12345678",
  },
];

const posts = [
  {
    id: 0,
    orgId: 0,
    description: "Post 0 description",
    image: "https://via.placeholder.com/150"
  },
  {
    id: 1,
    orgId: 0,
    description: "Post 1 description",
    image: "https://via.placeholder.com/150"
  }
];

module.exports = {
  orgs,
  users,
  posts
}