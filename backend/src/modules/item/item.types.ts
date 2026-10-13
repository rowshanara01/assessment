import { Model } from "mongoose";

export enum ItemCategory {
  ELECTRONICS = "electronics",
  FASHION = "fashion",
  BOOKS = "books",
  HOME = "home",
  OTHER = "other",
}

export interface IItem {
  title: string;
  description: string;
  price: number;
  category: ItemCategory;
}

export interface IItemModelType extends Model<IItem> {
  findByCategory(): void;
}
