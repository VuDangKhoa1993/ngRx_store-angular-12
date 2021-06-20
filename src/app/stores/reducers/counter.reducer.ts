import { Action, createReducer, on } from '@ngrx/store';
import { decrement, increment, reset } from '@store/actions/counter.action';

const initialState: number = 0;
const _counterReducer = createReducer(
    initialState,
    on(increment, (state: number) => state + 1),
    on(decrement, (state: number) => state - 1),
    on(reset, (state) => 0)
);

export function counterReducer(state: number, action: Action) {
    return _counterReducer(state, action);
}