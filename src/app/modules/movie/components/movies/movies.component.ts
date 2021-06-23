import { IAppState } from '@store/models/base.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Movie } from '@shared/models/movie';
import { movieSelectors } from '@store/reducers/movie.reducer';
import { getAllMovies } from '@store/actions/movie.action';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  public movies$: Observable<Movie[]>;
  constructor(
    private store: Store<IAppState>
  ) { }

  ngOnInit(): void {
    this.movies$ = this.store.select(movieSelectors.getAllMovies);
    this.getAllMovies();
  }

  getAllMovies() {
    this.store.dispatch(getAllMovies());
  }
}
