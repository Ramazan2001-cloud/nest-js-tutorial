import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TaskService {
    private tasks = [
        {
            id: 1,
            title: 'Learn Nest JS',
            isCompleted: false,
        },
        {
            id: 2,
            title: 'Build API',
            isCompleted: false,
        },
        {
            id: 3,
            title: 'Auth API',
            isCompleted: false,
        },
    ];

    findAll() {
        return this.tasks;
    }

    findById(id: number) {
        const task = this.tasks.find((task) => task.id === id);
        if (!task) {
            throw new NotFoundException();
        }
        return task;
    }

    create(dto: CreateTaskDto) {
        const { title, description, isCompleted, priority, tags } = dto;

        const newTask = {
            id: this.tasks.length + 1,
            title,
            description,
            isCompleted,
            priority,
            tags,
        };
        this.tasks.push(newTask);

        return this.tasks;
    }

    update(id: number, dto: UpdateTaskDto) {
        const { title, isCompleted } = dto;
        const task = this.findById(id);

        task.title = title;
        task.isCompleted = isCompleted;

        return this.tasks;
    }

    patcUpdate(id: number, dto: Partial<UpdateTaskDto>) {
        const task = this.findById(id);
        Object.assign(task, dto);

        return this.tasks;
    }

    delete(id: number) {
        this.tasks = this.tasks.filter((task) => task.id !== id);
        return this.tasks;
    }
}
