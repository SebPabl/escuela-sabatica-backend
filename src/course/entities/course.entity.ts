import { Teacher } from "src/teacher/entities/teacher.entity";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";


@Entity()
export class Course {

    @PrimaryGeneratedColumn()
    id: number;

    @OneToMany(()=> Teacher, (teacher)=> teacher.course)
    teacher: Teacher[]

    @Column({ length: 255, nullable: true })
    name: string;

    @Column({ length: 255, nullable: true })
    description: string;
}