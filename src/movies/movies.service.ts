/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Movie } from './movies.model';
import { Model } from 'mongoose';

@Injectable()
export class MoviesService {
  constructor(@InjectModel('Movie') private readonly movieModel: Model<Movie>) {}

  async create(createMovieDto: Movie): Promise<Movie> {
    const createdMovie = new this.movieModel(createMovieDto);
    return await createdMovie.save();
  }

  async findAll(): Promise<Movie[]> {
    return await this.movieModel.find().exec();
  }

  async findOne(id: string): Promise<Movie> {
    return await this.movieModel.findOne({ _id: id });
  }

  async delete(id: string): Promise<Movie> {
    return await this.movieModel.findByIdAndRemove(id);
  }

  async update(id: string, movie: Movie): Promise<Movie> {
    return await this.movieModel.findByIdAndUpdate(id, movie, { new: true });
  }
}
