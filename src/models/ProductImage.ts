import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Product } from "./Product";

export enum ProductImageType {
  MEDIUM = "medium",
  BIG = "big",
  SMALL = "small",
}

@Entity()
export class ProductImage {
  @PrimaryGeneratedColumn("uuid") id: string;
  @Column({
    length: 100,
  })
  name: string;

  @Column() url: string;

  @ManyToOne(type => Product, product => product.images)
  product: Product;

  @Column()
  type: ProductImageType;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt?: Date;

  @DeleteDateColumn()
  deletedAt?: Date;
}
