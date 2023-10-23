import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Course } from './entities/course.entity';
import { Repository } from 'typeorm';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Injectable()
export class CourseService {
    constructor(
        @InjectRepository(Course)
        private readonly courseRepository: Repository<Course>
    ) { }

    async create(createCourseDto: CreateCourseDto) {
        const course = this.courseRepository.create(createCourseDto);
        return await this.courseRepository.save(course);
    }

    async findAll() {
        return await this.courseRepository.find();
    }

    async findOne(id: number) {
        return await this.courseRepository.findOne({
            where: { id }
        })
    }

    async update(id: number, updateCourseDto: UpdateCourseDto) {
        return await this.courseRepository.update(id, updateCourseDto)
    }

    async remove(id: number) {
        return await this.courseRepository.delete(id)
    }
}
