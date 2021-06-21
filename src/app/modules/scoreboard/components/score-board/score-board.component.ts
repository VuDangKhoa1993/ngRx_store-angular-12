import { Router } from '@angular/router';
import { IAppState } from '@store/models/base.model';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { awayScore, homeScore, resetScore, setScore } from '@store/actions/score-board.action';
import { clearMemoizedAllSelectorValues, getSumOfScore, scoreboardSelector, selectFeature } from '@store/reducers/score-board.reducer';

@Component({
  selector: 'app-score-board',
  templateUrl: './score-board.component.html',
  styleUrls: ['./score-board.component.css']
})
export class ScoreBoardComponent implements OnInit {
  public homeScore$: Observable<number>;
  public awayScore$: Observable<number>;
  public sumOfScore$: Observable<number>;
  constructor(
    private store: Store<IAppState>,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.homeScore$ = this.store.select(scoreboardSelector.getHomeScore);
    this.awayScore$ = this.store.select(scoreboardSelector.getAwayScore);
    this.sumOfScore$ = this.store.select(getSumOfScore);
  }

  addHomeScore() {
    this.store.dispatch(homeScore());
  }

  addAwayScore() {
    this.store.dispatch(awayScore());
  }

  resetScore() {
    this.store.dispatch(resetScore());
  }

  setScore() {
    this.store.dispatch(setScore({ game: { home: 2, away: 0 } }));
  }

  clearMemoizedValue() {
    // reset memoized value of the selectors
    clearMemoizedAllSelectorValues();
  }

  goToHome() {
    this.route.navigate(['home']);
  }
}
