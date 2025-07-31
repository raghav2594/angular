import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface IMovie{
  title: string;
  year: number;
  director: string;
}

@Component({
  selector: 'app-for',
  imports: [CommonModule],
  templateUrl: './for.component.html',
  styleUrl: './for.component.css'
})
export class ForComponent {

  courses : string[];
  movies: IMovie[];

  constructor() {
    this.courses = ['Angular', 'React', 'Vue', 'Svelte'];
    this.movies = [
      { title: 'Inception', year: 2010, director: 'Christopher Nolan' },
      { title: 'The Matrix', year: 1999, director: 'The Wachowskis' },
      { title: 'Interstellar', year: 2014, director: 'Christopher Nolan' },
      { title: 'The Shawshank Redemption', year: 1994, director: 'Frank Darabont' }
    ];
  }


}
