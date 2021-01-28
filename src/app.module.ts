//import { AuthModule } from './auth/auth.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';

import { ProductsModule } from './products/products.module';
//import { AuthService } from './auth/auth.service';

@Module({
  imports: [
    ProductsModule,
    MongooseModule.forRoot(
      'mongodb+srv://nhatanh:nhatanh@cluster0.b6p77.mongodb.net/<dbname>?retryWrites=true&w=majority',
    ),
    AuthModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
