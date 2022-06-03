import { Router } from 'express';

import { Category } from '../model/Category';

const categoriesRoutes = Router();

const categories:Category[] = [];

categoriesRoutes.post('/', (request, response) => {
  const { name, description } = request.body;

  const catetegory = new Category();

  Object.assign(catetegory, { name, description, created_at: new Date() });

  categories.push(catetegory);

  return response.status(201).json({ catetegory });
});

export { categoriesRoutes };
