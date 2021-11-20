/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './movies.model';

@Controller('movies')
export class MoviesController {
  constructor(private moviesService: MoviesService) {}

  @Get()
  findAll() {
    return this.moviesService.findAll();
  }
  
  @Get(':id')
  get(@Param() params) {
    return this.moviesService.findOne(params.id);
  }

  @Post()
  create(@Body() movie: Movie) {
    return this.moviesService.create(movie);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateMovieDto: Movie) {
    return this.moviesService.update(id, updateMovieDto);
  }

  @Delete(':id')
  remove(@Param() params) {
    return this.moviesService.delete(params.id);
  }
}
