import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import { Coffee } from './entities/cofee.entity';

@Injectable()
export class CoffeesService {
  private coffees: Array<Coffee> = [
    {
      id: 1,
      name: 'Shipwerck Roast',
      brand: 'Buddy Brew',
      flavors: ['chocolate', 'vanilla'],
    },
  ];

  findAll() {
    return this.coffees;
  }

  findOne(id: string) {
    const coffee = this.coffees.find((item) => item.id === +id);
    if (!coffee) {
      throw new NotFoundException(`Coffee #${id} not found`);
    }
    return coffee;
  }

  create(createCooffeeDto: any) {
    this.coffees.push(createCooffeeDto);
  }

  update(id: string, updateCoffeDto: UpdateCoffeeDto) {
    const existingCoffee = this.findOne(id);
    if (existingCoffee) {
      //update
    }
  }

  remove(id: string) {
    this.coffees = this.coffees.filter((c) => c.id !== +id);
  }
}
