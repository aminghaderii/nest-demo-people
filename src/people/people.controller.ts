import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { PeopleService } from './people.service';
import { Person } from './schemas/person.schema';

@Controller('people')
export class PeopleController {
  constructor(private readonly peopleService: PeopleService) {}

  @Post()
  async create(@Body() personData: Person): Promise<Person> {
    return this.peopleService.create(personData);
  }

  @Get()
  async findAll(): Promise<Person[]> {
    return this.peopleService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Person> {
    return this.peopleService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() personData: Partial<Person>): Promise<Person> {
    return this.peopleService.update(id, personData);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Person> {
    return this.peopleService.delete(id);
  }
}
