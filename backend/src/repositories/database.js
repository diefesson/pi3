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
    description: "Descrição do post 0",
    image: "https://via.placeholder.com/150"
  },
  {
    id: 1,
    orgId: 0,
    description: "Descrição do post 1",
    image: "https://via.placeholder.com/150"
  }
];

module.exports = {
  orgs,
  users,
  posts
}