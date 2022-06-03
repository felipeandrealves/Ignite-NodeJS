import { Specification } from '../../model/Specification';
import { ISpecificationsRepository, ISpecificationsRepositoryDTO } from '../ISpecificationsRepository';

class SpecificationsRepository implements ISpecificationsRepository {
  private specifications: Specification[];

  constructor() {
    this.specifications = [];
  }

  findByName(name: string): Specification {
    const specification = this.specifications.find((specification) => specification.name === name);

    return specification;
  }

  create({ description, name }: ISpecificationsRepositoryDTO): void {
    const specification = new Specification();

    Object.assign(specification, { description, name, created_at: new Date() });

    this.specifications.push(specification);
  }
}

export { SpecificationsRepository };
