import { IsNumber, IsOptional, IsString } from 'class-validator'

export class CreateTeacherDto {
    @IsNumber()
    @IsOptional()
    idCourse: number;

    @IsString()
    name: string;

    @IsString()
    lastName: string;

    @IsNumber()
    @IsOptional()
    age: number;

    @IsString()
    @IsOptional()
    address: string;
}