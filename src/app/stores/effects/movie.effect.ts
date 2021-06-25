import { EMPTY, Observable, of } from 'rxjs';
import { MovieService } from '../../shared/services/movie/movie.service';
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action } from '@ngrx/store';
import { MovieActions } from '@store/actions/movie.action';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { Movie } from '@shared/models/movie';

@Injectable() 
export class MovieEffects {
    constructor(
        private action$: Actions,
        private movieService: MovieService
    ) { }

    getAllMovies$: Observable<Action> = createEffect(() => this.action$.pipe(
        ofType<Action>(MovieActions.GET_ALL_MOVIES),
        mergeMap(() => this.movieService.getAllMovies().pipe(
            map((movies: Movie[]) => ({ type: MovieActions.GET_ALL_MOVIES_SUCCESS, movies } as Action)),
            catchError(() => of({ type: MovieActions.GET_ALL_MOVIES_FAILURE } as Action))
        ))
    ));
}