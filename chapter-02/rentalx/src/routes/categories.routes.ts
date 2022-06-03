import { Router } from 'express';
import { v4 as uuidv4 } from 'uuid';

const categoriesRoutes = Router();

const categories = [];

categoriesRoutes.post('/', (request, response) => {
  const { name, description } = request.body;

  const catetegory = {
    id: uuidv4(),
    name,
    description,
  };

  categories.push(catetegory);

  return response.status(201).send();
});

export { categoriesRoutes };
