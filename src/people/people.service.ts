import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Person } from './schemas/person.schema';

@Injectable()
export class PeopleService {
  constructor(@InjectModel(Person.name) private personModel: Model<Person>) {}

  async create(personData: Person): Promise<Person> {
    const newPerson = new this.personModel(personData);
    return newPerson.save();
  }

  async findAll(): Promise<Person[]> {
    return this.personModel.find().exec();
  }

  async findOne(id: string): Promise<Person> {
    return this.personModel.findById(id).exec();
  }

  async update(id: string, personData: Partial<Person>): Promise<Person> {
    return this.personModel.findByIdAndUpdate(id, personData, { new: true }).exec();
  }

  async delete(id: string): Promise<Person> {
    return this.personModel.findByIdAndDelete(id).exec();
  }
}
