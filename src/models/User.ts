import { Field, ObjectType } from "@nestjs/graphql";
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from "typeorm";
import { Address } from "./Address";

export enum UserStatus {
  ACTIVE = "active",
  DISABLED = "disabled",
}

@ObjectType()
@Entity()
@Unique(["email"])
export class User {
  @Field()
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field()
  @Column({
    length: 100,
  })
  name: string;

  @Field()
  @Column()
  password: string;

  @Field()
  @Column()
  email: string;

  @Field()
  @Column({ nullable: true })
  phone: string;

  @Field()
  @Column()
  cpf: string;

  @Field((type) => [Address], { nullable: true })
  @OneToMany((type) => Address, (address) => address.user)
  addresses: Address[];

  @Field()
  @Column({
    type: "enum",
    enum: UserStatus,
    default: UserStatus.DISABLED,
  })
  status: UserStatus;

  @Field()
  @CreateDateColumn()
  createdAt!: Date;

  @Field()
  @UpdateDateColumn()
  updatedAt?: Date;

  @Field()
  @DeleteDateColumn()
  deletedAt?: Date;
}
