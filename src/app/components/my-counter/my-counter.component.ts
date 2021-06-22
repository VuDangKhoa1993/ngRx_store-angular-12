import { IAppState } from '@store/models/base.model';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '@store/actions/counter.action';
@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.css']
})
export class MyCounterComponent implements OnInit {
  public count$: Observable<number>;
  constructor(
    private readonly store: Store<IAppState>
  ) { }

  ngOnInit() {
    // TODO: Connect `this.count$` stream to the current store `count` state
    this.count$ = this.store.select('count');
  }

  increment() {
    // TODO: Dispatch an increment action
    this.store.dispatch(increment());
  }

  decrement() {
    // TODO: Dispatch an decrement action 
    this.store.dispatch(decrement());
  }

  reset() {
    // TODO: Dispatch an reset action
    this.store.dispatch(reset());
  }
}
