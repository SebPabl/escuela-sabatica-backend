import { IsBoolean, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateAssistanceDto {
    @IsNumber()
    @IsOptional()
    idStudent: number;

    @IsBoolean()
    @IsOptional()
    state: boolean;
}