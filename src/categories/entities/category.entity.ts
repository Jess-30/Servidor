import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";

@Entity('categories')
export class Category {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({ length: 50 })
    descripcion: string;
    @Column({ length: 50 })
    color: string;
    @Column({ length: 100 })
    imagen: string;
}
