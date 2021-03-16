import {Genre} from './genre';

export class Composition {
  id: number;
  title: string;
  titleCode: string;
  author: string;
  genreId: number;
  genre: Genre;
  publishWeek: string;
  likes: number;
  subscribers: number;
  rate: number;
  status: string;
  description: string;

  constructor() {
  }
}
