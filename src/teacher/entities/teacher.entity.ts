import { Course } from "src/course/entities/course.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Teacher {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Course)
    @JoinColumn({ name: 'idCourse', referencedColumnName: 'id' })
    course: Course;

    @Column({ nullable: true })
    idCourse: number;

    @Column({ length: 255, nullable: true })
    name: string;

    @Column({ length: 255, nullable: true })
    lastName: string;

    @Column({ nullable: true })
    age: number;

    @Column({ length: 255, nullable: true })
    address: string;
}
