import { Router } from 'express';

import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'teste',
    email: 'asdf',
    password_hash: 'hkgsdf',
  });

  return res.json(user);
});

module.exports = routes;
