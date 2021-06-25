import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { User } from '@shared/models/user';
import { Observable } from 'rxjs';
import { IAppState } from '@store/models/base.model';
import { getAllUsers } from '@store/actions/home.action';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public users$: Observable<{ users: User[] }>;
  public myFormControl = new FormControl(19);

  constructor(
    private readonly store: Store<IAppState>
  ) { }

  ngOnInit(): void {
    this.users$ = this.store.select('home');
    this.store.dispatch(getAllUsers());
  }

  updateSlider($event) {
    this.myFormControl.setValue($event.currentTarget.value, { emitModelToViewChange: true })
  }
}
