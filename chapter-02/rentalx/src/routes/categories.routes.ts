import { Router } from 'express';

import { CategoryRepositories } from '../repositories/CategoryRepositories';

const categoriesRoutes = Router();

const categoryRepositories = new CategoryRepositories();

categoriesRoutes.post('/', (request, response) => {
  const { name, description } = request.body;

  categoryRepositories.create({ name, description });

  return response.status(201).json();
});

categoriesRoutes.get('/', (request, response) => {
  const all = categoryRepositories.list();

  return response.json(all);
});

export { categoriesRoutes };
