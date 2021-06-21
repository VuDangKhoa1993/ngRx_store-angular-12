import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { scoreboardReducer, scoreboardFeatureKey } from '@store/reducers';
import { ScoreBoardComponent } from './components/score-board/score-board.component';
import { ScoreBoardRoutingModule } from './score-board-routing.module';

@NgModule({
  declarations: [
    ScoreBoardComponent
  ],
  imports: [
    CommonModule,
    ScoreBoardRoutingModule,
    StoreModule.forFeature(scoreboardFeatureKey, scoreboardReducer)
  ]
})
export class ScoreboardModule { }
