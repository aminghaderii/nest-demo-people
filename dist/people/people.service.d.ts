import { Model } from 'mongoose';
import { Person } from './schemas/person.schema';
export declare class PeopleService {
    private personModel;
    constructor(personModel: Model<Person>);
    create(personData: Person): Promise<Person>;
    findAll(): Promise<Person[]>;
    findOne(id: string): Promise<Person>;
    update(id: string, personData: Partial<Person>): Promise<Person>;
    delete(id: string): Promise<Person>;
}
