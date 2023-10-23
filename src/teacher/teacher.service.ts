import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Teacher } from './entities/teacher.entity';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';

@Injectable()
export class TeacherService {
    constructor(@InjectRepository(Teacher) private readonly teacherRepository: Repository<Teacher>) {}

    async create( createTeacherDto: CreateTeacherDto) {
        const teacher = this.teacherRepository.create(createTeacherDto);
        return await this.teacherRepository.save(teacher);
    }

    async findAll(){
        return await this.teacherRepository.find();
    }

    async findOne(id: number) {
        return await this.teacherRepository.findOne({ 
            where: { id }
        })
    }

    async update(id: number, updateTeacherDto: UpdateTeacherDto){
        return await this.teacherRepository.update(id, updateTeacherDto);
    }

    async remove(id: number){
        return await this.teacherRepository.delete(id)
    }
}
