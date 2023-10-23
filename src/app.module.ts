import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { CourseModule } from './course/course.module';
import { StudentModule } from './student/student.module';
import { TeacherModule } from './teacher/teacher.module';

@Module({
  imports: [ ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
    type: 'mssql',
    host: 'localhost',
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: 'EscuelaSabatica',
    autoLoadEntities: true,
    synchronize: true,
    options: { trustServerCertificate: true },   
  }),
    CourseModule,
    StudentModule,
    TeacherModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
