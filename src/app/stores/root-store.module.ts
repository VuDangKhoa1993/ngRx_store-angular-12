import { IAppState } from './models/base.model';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Action, ActionReducerMap, StoreModule } from '@ngrx/store';
import { counterReducer, homeReducer, loginReducer, scoreboardReducer } from './reducers';

const appReducers: ActionReducerMap<IAppState, Action> = {
  count: counterReducer,
  login: loginReducer,
  home: homeReducer,
  game: scoreboardReducer
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot(appReducers)
  ]
})
export class RootStoreModule { }
