import { IsDate, IsNumber } from "class-validator";

export class CreateOfferingDto {

    @IsNumber()
    amount: number;

    @IsNumber()
    idCourse: number;

    @IsDate()
    date: Date;
}