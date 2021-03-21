import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoriesService {

  constructor(@InjectRepository(Category) private rep: Repository<Category>) {

  }

  async obtenerCategories(category: Category): Promise<Category[]> {
    return await this.rep.find();
  }
  async obtenerCategory(_id: number): Promise<Category[]> {
    return await this.rep.find({
      select: ["id", "descripcion", "color", "imagen"],
      where: [
        { "id": _id }
      ]
    });
  }
  async crearCategory(category: Category) {
    await this.rep.insert(category);
  }
  async actualizarCategory(category: Category) {
    await this.rep.update({ id: category.id }, category);
  }
  async borrarCategory(usuario: Category) {
    await this.rep.delete(usuario);
  }
}

