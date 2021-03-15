import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { ProductImage } from "./ProductImage";

@Entity()
export class Product {
  @PrimaryGeneratedColumn("uuid") id: string;
  @Column({
    length: 100,
  })
  name: string;
  @Column() 
  description: string;

  @Column() 
  price: number;

  @Column() 
  phone: string;

  @Column() 
  videoUrl: string;

  @OneToMany(type => ProductImage, productImage => productImage.product)
  images: ProductImage;
  
  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt?: Date;

  @DeleteDateColumn()
  deletedAt?: Date;
}
