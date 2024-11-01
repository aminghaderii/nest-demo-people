import { Document } from 'mongoose';
export declare class Person extends Document {
    name: string;
    age: number;
    email: string;
}
export declare const PersonSchema: import("mongoose").Schema<Person, import("mongoose").Model<Person, any, any, any, Document<unknown, any, Person> & Person & Required<{
    _id: unknown;
}> & {
    __v?: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Person, Document<unknown, {}, import("mongoose").FlatRecord<Person>> & import("mongoose").FlatRecord<Person> & Required<{
    _id: unknown;
}> & {
    __v?: number;
}>;
