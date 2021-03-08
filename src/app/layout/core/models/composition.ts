import {Genre} from './genre';

export class Composition {
  id: number;
  title: string;
  author: string;
  genreId: number;
  genre: Genre;
  publishWeek: string;
  likes: number;
  status: string;
  description: string;

  constructor() {
  }
}
