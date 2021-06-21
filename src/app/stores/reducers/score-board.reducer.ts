import { IAppState } from '@store/models/base.model';
import { IScoreBoardState } from './../models/score-board.model';
import { Action, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
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

// Selecting feature state
export const scoreboardFeatureKey = 'game';
export const selectFeature = createFeatureSelector<IAppState, IScoreBoardState>(scoreboardFeatureKey);
export const scoreboardSelector = {
    getHomeScore: createSelector(selectFeature, (state: IScoreBoardState) => state.home),
    getAwayScore: createSelector(selectFeature, (state: IScoreBoardState) => state.away),
    // getSumOfScore: createSelector(selectFeature, (state: IScoreBoardState) => state.home + state.away) // option 1
};

// option 2
export const getSumOfScore = createSelector(
    scoreboardSelector.getHomeScore,
    scoreboardSelector.getAwayScore,
    (homeScore: number, awayScore: number) => homeScore + awayScore
);

export const clearMemoizedAllSelectorValues = () => {
    return selectFeature.release();
}