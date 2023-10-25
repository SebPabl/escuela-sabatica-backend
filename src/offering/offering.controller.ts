import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { OfferingService } from './offering.service';
import { CreateOfferingDto } from './dto/create-offering.dto';
import { UpdateOfferingDto } from './dto/update-offering.dto';

@Controller('offering')
export class OfferingController {
    constructor(private readonly offeringService: OfferingService) { }

    @Post()
    create(@Body() createOfferingDto: CreateOfferingDto) {
        return this.offeringService.create(createOfferingDto);
    }

    @Get()
    findAll() {
        return this.offeringService.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.offeringService.findOne(id)
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() updateOfferingDto: UpdateOfferingDto) {
        return this.offeringService.update(id, updateOfferingDto);
    }

    @Delete(':id')
    remove(@Param('id') id: number) {
        return this.offeringService.remove(id);
    }
}
