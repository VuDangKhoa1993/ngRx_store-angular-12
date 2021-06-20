import { IScoreBoardState } from './../models/score-board.model';
import { Action, createReducer, on } from '@ngrx/store';
import * as ScoreboardPageActions from '@store/actions/score-board.action';

const intialState: IScoreBoardState = {
    home: 0,
    away: 0
};

const _scoreboardReducer = createReducer(
    intialState,
    on(ScoreboardPageActions.homeScore, (state: IScoreBoardState) => ({ ...state, home: state.home + 1 })),
    on(ScoreboardPageActions.awayScore, (state: IScoreBoardState) => ({ ...state, away: state.away + 1 })),
    on(ScoreboardPageActions.resetScore, (state: IScoreBoardState) => ({ ...state, home: 0, away: 0 })),
    on(ScoreboardPageActions.setScore,
        (state: IScoreBoardState, { game }) => ({ ...state, home: game.home, away: game.away }))
);

export function scoreboardReducer(state: IScoreBoardState | undefined, action: Action) {
    return _scoreboardReducer(state, action);
};