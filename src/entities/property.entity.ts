import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { PropertyFeature } from "./property.feature.entity";
import { User } from "./user.entity";

@Entity()
export class Property {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column({ default : 0 })
    price: number;

    @OneToOne(
        () => PropertyFeature,
        (PropertyFeature) => PropertyFeature.property,
        { cascade: true }
    )
    propertyFeature: PropertyFeature;

    @ManyToOne(() => User, (User) => User.properties)
    @JoinColumn({ name: 'OwnerId'})
    user: User;

    @ManyToMany(() => User, (user) => user.likedProperties )
    likedBy: User[];
}