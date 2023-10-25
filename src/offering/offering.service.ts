import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Offering } from './entities/offering.entity';
import { Repository } from 'typeorm';
import { CreateOfferingDto } from './dto/create-offering.dto';
import { UpdateOfferingDto } from './dto/update-offering.dto';

@Injectable()
export class OfferingService {
    constructor(@InjectRepository(Offering) private readonly offeringRepository: Repository<Offering>) { }

    async create(createOfferingDto: CreateOfferingDto) {
        const offering = this.offeringRepository.create(createOfferingDto);
        return await this.offeringRepository.save(offering)
    }

    async findAll() {
        return await this.offeringRepository.find();
    }

    async findOne(id: number) {
        return await this.offeringRepository.findOne({
            where: { id }
        });
    }

    async update(id: number, updateOfferingDto: UpdateOfferingDto) {
        return await this.offeringRepository.update(id, updateOfferingDto);
    }

    async remove(id: number) {
        return await this.offeringRepository.delete(id);
    }
}
