import { IsArray, IsBoolean, IsEnum, IsInt, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString, IsUrl, IsUUID, Length, Matches, MinLength } from "class-validator";

export enum TaskTag {
    WORK = 'work',
    STUDY = 'study',
    HOME = 'home'
}

export class CreateTaskDto {
    @IsString({ message: 'Название должно быть строкой' })
    @IsNotEmpty({ message: 'Название задачи не должно быть пустым' })
    @Length(2, 40, { message: 'Название должно быть от 2 до 10 символов' })
    title: string;

    @IsString({ message: 'Описание должно быть строкой' })
    @IsOptional()
    description: string;

    @IsBoolean({ message: 'Статус должен быть булевым выражениям' })
    @IsOptional()
    isCompleted: boolean;

    @IsInt({ message: 'Приоритет должен быть целым числом' })
    @IsPositive({ message: 'Число не должно быть отрицательным' })
    @IsOptional()
    priority: number;

    @IsArray({ message: 'Теги должны быть массивом' })
    @IsEnum(TaskTag, { each: true, message: 'Недопустимое значение тега' })
    @IsOptional()
    tags: TaskTag[];

    @IsString({ message: 'Пароль должен быть строкой' })
    @MinLength(6, { message: 'Пароль должен содержать минимум 6 символов' })
    @Matches(/^(?=.*[A-Z])(?=.*[0-9]).+$/, {
        message: 'Пароль должен содержать хотя бы одну заглавную букву и цифру',
    })
    @IsOptional()
    password: string;

    @IsUrl({ protocols: ['https'] }, { message: 'Некорректный формат URL' })
    @IsOptional()
    websiteUrl: string;

    @IsUUID('4', { message: 'Некорректный формат UUID'})
    userId: string;
}