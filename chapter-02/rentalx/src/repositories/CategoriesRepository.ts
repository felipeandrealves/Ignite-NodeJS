import { Category } from '../model/Category';
import { ICreateCategoryDTO } from './ICategoriesRepository';

class CategoriesRepository {
  private categories : Category[];

  constructor() {
    this.categories = [];
  }

  create({ description, name }:ICreateCategoryDTO): void {
    const catetegory = new Category();

    Object.assign(catetegory, { name, description, created_at: new Date() });

    this.categories.push(catetegory);
  }

  list(): Category[] {
    return this.categories;
  }

  findByName(name: string): Category {
    const catetegory = this.categories.find((category) => category.name === name);

    return catetegory;
  }
}

export { CategoriesRepository };
