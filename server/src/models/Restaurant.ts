import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Restaurant {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    street: string

    @Column()
    cuisine: string

}
