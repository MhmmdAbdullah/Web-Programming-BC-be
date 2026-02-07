import mongoose, { Schema, Document } from "mongoose";
import { truncate } from "node:fs";

export interface ICategory extends Document {
  name: string;
  description: string;
  imageUrl: string;
}

const CategorySchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true },
  },
  { timestamps: true },
);

export default mongoose.model<ICategory>("Category", CategorySchema);
