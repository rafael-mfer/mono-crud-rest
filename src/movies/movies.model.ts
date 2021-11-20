import * as mongoose from 'mongoose';

export const MovieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  director: { type: String, required: true },
  year: { type: Number, required: true },
});

export interface Movie {
  id: string;
  title: string;
  director: string;
  year: number;
}
