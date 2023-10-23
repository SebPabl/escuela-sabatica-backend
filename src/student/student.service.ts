import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from './entities/student.entity';
import { Repository } from 'typeorm';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

@Injectable()
export class StudentService {
    constructor(@InjectRepository(Student) private readonly studentRepository: Repository<Student>
    ) { }

    async create(createStudentDto: CreateStudentDto) {
        const student = this.studentRepository.create(createStudentDto);
        return await this.studentRepository.save(student)
    }

    async findAll() {
        return await this.studentRepository.find()
    }

    async findOne(id: number) {
        return await this.studentRepository.findOne({
            where: { id }
        })
    }

    async update(id: number, updateStudentDto: UpdateStudentDto) {
        return await this.studentRepository.update(id, updateStudentDto)
    }

    async remove(id: number) {
        return await this.studentRepository.delete(id)
    }
}
