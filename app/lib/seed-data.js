const users = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    username: 'GM',
    password: 'beepo',
  },
];

const timers = [
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    user_id: users[0].id,
    title: 'Will becomes suspicious',
    length: 3,
    fill: 1,
  },
  {
    id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
    user_id: users[0].id,
    title: 'Olivia arrives home',
    length: 6,
    fill: 3,
  },
];

module.exports = {
  users,
  timers
};