import { IHomeState } from '@store/models/home.model';
import { Action, createReducer, on } from '@ngrx/store';
import { getAllUsers } from '@store/actions/home.action';
import { User } from '@shared/models/user';

const initialState: IHomeState = {
    users: []
};

// mock data
const users: User[] =  [
    {
        id: 1,
        name: 'John',
        age: 25,
        email: 'john@gmail.com',
        phone: '+84 893525662'
    }
]

const _homeReducer = createReducer(
    initialState,
    on(getAllUsers, (state: IHomeState) => ({ ...state, users: users }))
);

export function homeReducer(state: IHomeState, action: Action) {
    return _homeReducer(state, action);
}