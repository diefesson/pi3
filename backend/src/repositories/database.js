const orgs = [
  {
    id: 0,
    name: "Ong teste",
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
    title: "Post 1 title",
    description: "Post 1 description",
    image: "https://via.placeholder.com/150"
  },
  {
    id: 1,
    orgId: 0,
    title: "Post 2 title",
    description: "Post 2 description",
    image: "https://via.placeholder.com/150"
  }
];

module.exports = {
  orgs,
  users,
  posts
}