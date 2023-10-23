import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";


@Entity()
export class Course {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 255, nullable: true })
    name: string;

    @Column({ length: 255, nullable: true })
    description: string;
}