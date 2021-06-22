import { metaReducers } from './reducers/meta.reducer';
import { IAppState } from './models/base.model';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Action, ActionReducerMap, StoreModule } from '@ngrx/store';
import { counterReducer, homeReducer, loginReducer } from './reducers';

const appReducers: ActionReducerMap<IAppState, Action> = {
  count: counterReducer,
  login: loginReducer,
  home: homeReducer
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot(appReducers, { metaReducers })
  ]
})
export class RootStoreModule { }
