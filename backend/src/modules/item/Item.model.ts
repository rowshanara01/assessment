import mongoose from "mongoose";
import { IItem, IItemModelType, ItemCategory } from "./item.types";

const itemSchema = new mongoose.Schema<IItem, IItemModelType>(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Description is required"],
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
    },
    category: {
      type: String,
      required: [true, "Category is required"],
      enum: Object.values(ItemCategory),
      lowercase: true,
      trim: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

itemSchema.static("findByCategory", function (category: string) {
  return this.find({ category: category.toLowerCase() });
});

export const Item = mongoose.model<IItem, IItemModelType>("Item", itemSchema);