import { createAction, props } from '@ngrx/store';
import { Movie } from '@shared/models/movie';

export enum MovieActions {
    GET_ALL_MOVIES = '[Movie Page] GET_ALL_MOVIES',
    GET_ALL_MOVIES_SUCCESS = '[Movie Page] GET_ALL_MOVIES_SUCCESS',
    GET_ALL_MOVIES_FAILURE = '[Movie Page] GET_ALL_MOVIES_FAILURE'
};

export const getAllMovies = createAction(MovieActions.GET_ALL_MOVIES);
export const getAllMoviesSuccess = createAction(MovieActions.GET_ALL_MOVIES_SUCCESS, props<{ movies: Movie[] }>());
export const getAllMoviesFailure = createAction(MovieActions.GET_ALL_MOVIES_FAILURE);