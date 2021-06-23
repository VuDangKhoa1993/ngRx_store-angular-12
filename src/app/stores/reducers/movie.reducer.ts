import { IAppState } from '@store/models/base.model';
import { Action, createFeatureSelector, createReducer, on, createSelector } from '@ngrx/store';
import { getAllMoviesFailure, getAllMoviesSuccess } from '@store/actions/movie.action';
import { IMovieState } from '@store/models/movie.model';

const initialState: IMovieState = {
    movies: []
};

const _movieReducer = createReducer(
    initialState,
    on(getAllMoviesSuccess, (state: IMovieState, { movies }) => ({ ...state, movies })),
    on(getAllMoviesFailure, (state: IMovieState) => ({ ...state, movies: [] }))
);

export function movieReducer(state: IMovieState, action: Action) {
    return _movieReducer(state, action);
};

export const movieFeatureKey = 'movies';
export const selectMovieFeature = createFeatureSelector<IAppState, IMovieState>(movieFeatureKey);

export const movieSelectors = {
    getAllMovies: createSelector(selectMovieFeature, (state: IMovieState) => state.movies)
};

