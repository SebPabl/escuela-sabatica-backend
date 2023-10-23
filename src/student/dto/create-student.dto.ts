import { IsNumber, IsOptional, IsString } from 'class-validator'

export class CreateStudentDto {

    @IsNumber()
    @IsOptional()
    idCourse: number;

    @IsString()
    name: string;

    @IsString()
    lastName: string;

    @IsNumber()
    age: number;

    @IsString()
    @IsOptional()
    address: string;

}