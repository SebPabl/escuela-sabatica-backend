import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Assistance } from './entities/assistance.entity';
import { Repository } from 'typeorm';
import { CreateAssistanceDto } from './dto/create-assistance.dto';
import { UpdateAssistanceDto } from './dto/update-assistance.dto';

@Injectable()
export class AssistanceService {
    constructor(@InjectRepository(Assistance) private readonly assistanceRepository: Repository<Assistance>) { }

    async create(createAssistanceDto: CreateAssistanceDto) {
        const assistance = this.assistanceRepository.create(createAssistanceDto);
        return await this.assistanceRepository.save(assistance);
    }

    async findAll() {
        return await this.assistanceRepository.find();
    }

    async findOne(id: number) {
        return await this.assistanceRepository.findOne({
            where: { id }
        })
    }

    async update(id: number, updateAssistanceDto: UpdateAssistanceDto) {
        return await this.assistanceRepository.update(id, updateAssistanceDto)
    }

    async remove(id: number) {
        return await this.assistanceRepository.delete(id)
    }
}
