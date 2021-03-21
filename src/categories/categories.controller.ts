import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { Category } from './entities/category.entity';

@Controller('categories')
export class CategoriesController {
  constructor(private servicio: CategoriesService) {

  }
  @Get()
  getAll(@Param() params) {
    return this.servicio.obtenerCategories(params.id);
  }
  @Get(':id')
  get(@Param() params) {
    return this.servicio.obtenerCategory(params.id)
  }
  @Post()
  create(@Body() category: Category) {
    return this.servicio.crearCategory(category);
  }
  @Put()
  update(@Body() category: Category) {
    return this.servicio.actualizarCategory(category);
  }
  @Delete(":id")
  delete(@Param() params) {
    return this.servicio.borrarCategory(params.id);
  }
}
