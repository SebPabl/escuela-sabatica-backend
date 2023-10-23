import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { AssistanceService } from './assistance.service';
import { CreateAssistanceDto } from './dto/create-assistance.dto';
import { UpdateAssistanceDto } from './dto/update-assistance.dto';

@Controller('assistance')
export class AssistanceController {
    constructor(private readonly assistanceService: AssistanceService) { }

    @Post()
    create(createAssistanceDto: CreateAssistanceDto) {
        return this.assistanceService.create(createAssistanceDto);
    }

    @Get()
    findAll() {
        return this.assistanceService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.assistanceService.findOne(id)
    }

    @Post(':id')
    update(@Param('id') id: number, @Body() updateAssistanceDto: UpdateAssistanceDto) {
        return this.assistanceService.update(id, updateAssistanceDto)
    }

    @Delete(':id')
    remove(@Param('id') id: number) {
        return this.assistanceService.remove(id)
    }
}
