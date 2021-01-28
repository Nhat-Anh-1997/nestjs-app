import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductsDto } from './dto/products.dto';
import { Product } from './interfaces/products.interface';
import { ProductDocument } from './schema/product.schema';
@Injectable()
export class ProductsService {
  constructor(
    @InjectModel('Product') private productModel: Model<ProductDocument>,
  ) {}

  async findAll(): Promise<Product[]> {
    return await this.productModel.find();
  }

  async create(createProductsDto: CreateProductsDto): Promise<Product> {
    const createProduct = new this.productModel(createProductsDto);
    return await createProduct.save();
  }

  async findOne(id: string): Promise<Product> {
    return await this.productModel.findOne({ _id: id });
  }

  async remove(id: string): Promise<Product> {
    return await this.productModel.findOneAndRemove({ _id: id });
  }

  async update(
    id: string,
    updateProductDto: CreateProductsDto,
  ): Promise<Product> {
    return await this.productModel.findOneAndUpdate({
      _id: id,
      updateProductDto,
    });
  }
}
