import {
    IsArray,
    IsBoolean,
    IsEnum,
    IsInt,
    IsNotEmpty,
    IsOptional,
    IsPositive,
    IsString,
    Length,
} from 'class-validator';
import { StartWith } from '../decorators/starts-with.decorator';

export enum TaskTag {
    WORK = 'work',
    STUDY = 'study',
    HOME = 'home',
}

export class CreateTaskDto {
    @IsString({ message: 'Название должно быть строкой' })
    @IsNotEmpty({ message: 'Название задачи не должно быть пустым' })
    @StartWith('Task:')
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
}
