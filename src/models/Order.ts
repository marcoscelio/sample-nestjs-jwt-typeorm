import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Address } from "./Address";
import { User } from "./User";

export enum OrderStatus {
  OPENED = "opened",
  IN_PREPARATION = "in_preparation",
  DELIVERED = "delivered",
}

@Entity()
export class Order {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne((type) => User)
  user: User;

  @ManyToOne((type) => Address)
  address: Address;

  @Column()
  amount: number;

  @Column({
    type: "enum",
    enum: OrderStatus,
    default: OrderStatus.OPENED,
  })
  status: OrderStatus;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt?: Date;

  @DeleteDateColumn()
  deletedAt?: Date;
}
