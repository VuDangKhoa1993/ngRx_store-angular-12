import { IScoreBoardState } from './score-board.model';
import { IHomeState } from '@store/models/home.model';
import { ILoginState } from './login.model';

export interface IAppState {
    count: number,
    login: ILoginState,
    home: IHomeState,
    game?: IScoreBoardState
}