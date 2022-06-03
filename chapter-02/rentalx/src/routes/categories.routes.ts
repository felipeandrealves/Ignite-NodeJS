import { Router } from 'express';

const categoriesRoutes = Router();

const categories = [];

categoriesRoutes.post('/categories', (request, response) => {
  const { name, description } = request.body;

  const catetegory = {
    name,
    description,
  };

  categories.push(catetegory);

  return response.status(201).send();
});

export { categoriesRoutes };
