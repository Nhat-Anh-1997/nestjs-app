import { Product } from './interfaces/products.interface';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ProductsService } from './products.service';

import { CreateProductsDto } from './dto/products.dto';

@Controller('products')
export class ProductController {
  constructor(private readonly productsService: ProductsService) {}
  @Get()
  findAll(): Promise<Product[]> {
    return this.productsService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(id);
  }
  @Post()
  create(@Body() createProductsDto: CreateProductsDto) {
    this.productsService.create(createProductsDto);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsService.remove(id);
  }
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateProductsDto: CreateProductsDto,
  ) {
    return this.productsService.update(id, updateProductsDto);
  }
}
