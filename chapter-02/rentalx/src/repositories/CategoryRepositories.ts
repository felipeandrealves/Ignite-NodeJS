import { Category } from '../model/Category';

interface ICreateCategoryDTO {
  name: string,
  description: string,
}

class CategoryRepositories {
  private categories : Category[];

  constructor() {
    this.categories = [];
  }

  create({ description, name }:ICreateCategoryDTO): void {
    const catetegory = new Category();

    Object.assign(catetegory, { name, description, created_at: new Date() });

    this.categories.push(catetegory);
  }
}

export { CategoryRepositories };
