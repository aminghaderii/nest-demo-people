import { PeopleService } from './people.service';
import { Person } from './schemas/person.schema';
export declare class PeopleController {
    private readonly peopleService;
    constructor(peopleService: PeopleService);
    create(personData: Person): Promise<Person>;
    findAll(): Promise<Person[]>;
    findOne(id: string): Promise<Person>;
    update(id: string, personData: Partial<Person>): Promise<Person>;
    delete(id: string): Promise<Person>;
}
