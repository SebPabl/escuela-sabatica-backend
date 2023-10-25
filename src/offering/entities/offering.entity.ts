import { Course } from "src/course/entities/course.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Offering {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    amount: number;

    @OneToOne(() => Course)
    @JoinColumn({ name: 'idCourse', referencedColumnName: 'id' })
    course: Course;

    @Column()
    idCourse: number;

    @Column()
    date: Date;
}