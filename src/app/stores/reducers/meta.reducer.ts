import { IAppState } from './../models/base.model';
import { Action, ActionReducer, MetaReducer } from "@ngrx/store";

export function clearState(reducer: ActionReducer<any>): ActionReducer<any> {
    return (state: IAppState, action: Action) => {
        if(action.type === '[Home Page] Logout') {
            state = undefined;
        }
        return reducer(state, action);
    }
}

export const metaReducers: MetaReducer<any>[] = [clearState];