import { createAction, props } from '@ngrx/store';
import { Game } from '@shared/models/game';

export const homeScore = createAction('[ScoreBoard Page] Home Score');
export const awayScore = createAction('[ScoreBoard Page] Away Score');
export const resetScore = createAction('[ScoreBoard Page] Reset Score');
export const setScore = createAction('[ScoreBoard Page] Set Score', props<{ game: Game }>());
