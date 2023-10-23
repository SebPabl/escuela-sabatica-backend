import { Student } from "src/student/entities/student.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Assistance {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Student)
    @JoinColumn({ name: 'idStudent', referencedColumnName: 'id' })
    student: Student;

    @Column({ nullable: true })
    idStudent: number;

    @Column({ nullable: true })
    state: boolean;


}