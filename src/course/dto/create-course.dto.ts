import { IsOptional, IsString } from 'class-validator'

export class CreateCourseDto {

    @IsString()
    name: string;

    @IsString()
    @IsOptional()
    description: string;
}