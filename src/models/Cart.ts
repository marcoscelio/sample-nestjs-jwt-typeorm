import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Product } from "./Product";
import { ProductDetails } from "./ProductDetails";

@Entity()
export class Cart {
  @PrimaryGeneratedColumn("uuid") id: string;

  @Column()
  quantity: number;

  @ManyToOne((type) => Product)
  productDetails: ProductDetails;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt?: Date;

  @DeleteDateColumn()
  deletedAt?: Date;
}
