import { Action, createReducer, on } from '@ngrx/store';
import { login, logout } from '@store/actions/login.action';
import { ILoginState } from '@store/models/login.model';

const initialState: ILoginState = {
    isLogin: false
};

const _loginReducer = createReducer(
    initialState, 
    on(login, (state: ILoginState) => ({ ...state, isLogin: true })),
    on(logout, (state: ILoginState) => ({ ...state, isLogin: false }))
);

export function loginReducer(state: ILoginState, action: Action) {
    return _loginReducer(state, action);
};