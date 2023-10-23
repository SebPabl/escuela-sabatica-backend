import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateCourseDto } from 'src/course/dto/update-course.dto';

@Controller('teacher')
export class TeacherController {
    constructor(private readonly teacherService: TeacherService) {}

    @Post()
    create(@Body() createTeacherDto: CreateTeacherDto) {
        return this.teacherService.create(createTeacherDto)
    }

    @Get()
    findAll(){
        return this.teacherService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.teacherService.findOne(id);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() updateCourseDto: UpdateCourseDto){
        return this.teacherService.update(id, updateCourseDto);
    }

    @Delete(':id')
    remove(@Param('id') id: number) {
        return this.teacherService.remove(id)
    }
}
