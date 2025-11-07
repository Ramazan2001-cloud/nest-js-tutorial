import { IsBoolean, IsString, IsNotEmpty, Length, IsOptional } from "class-validator";

export class UpdateTaskDto {
    @IsString({ message: 'Название должно быть строкой'})
    @IsNotEmpty({ message: 'Название задачи не должно быть пустым'})
    @Length(2, 40, { message: 'Название должно быть от 2 до 10 символов'})
    title: string;

    @IsString({ message: 'Описание должно быть строкой'})
    @IsOptional()
    description: string;

    @IsBoolean({ message: 'Статус должен быть булевым выражениям'})
    @IsOptional()
    isCompleted: boolean;
}