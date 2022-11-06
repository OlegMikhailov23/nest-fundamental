import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesModule } from './coffees/coffees.module';
import { ormConfig } from './data-source';
import { CoffeeRatingModule } from './coffee-rating/coffee-rating.module';

@Module({
  imports: [
    CoffeesModule,
    TypeOrmModule.forRoot(ormConfig),
    CoffeeRatingModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
