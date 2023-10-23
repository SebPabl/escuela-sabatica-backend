import { IsNumber, IsString } from 'class-validator'

export class CreateStudentDto {

    @IsNumber()
    idCourse: number;

    @IsString()
    name: string;

    @IsString()
    lastName: string;

    @IsNumber()
    age: number;

    @IsString()
    address: string;
    
}