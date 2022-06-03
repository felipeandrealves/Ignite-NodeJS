import { Category } from '../../model/Category';
import { ICategoriesRepository, ICreateCategoryDTO } from '../ICategoriesRepository';

class CategoriesRepository implements ICategoriesRepository {
  private categories : Category[];

  private static INSTANCE: CategoriesRepository;

  private constructor() {
    this.categories = [];
  }

  public static getInstance() {
    if (!CategoriesRepository.INSTANCE) {
      CategoriesRepository.INSTANCE = new CategoriesRepository();
    }

    return CategoriesRepository.INSTANCE;
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
