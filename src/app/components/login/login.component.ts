import { ILoginState } from './../../stores/models/login.model';
import { IAppState } from '@store/models/base.model';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { login, logout } from '../../stores/actions/login.action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLogin$: Observable<ILoginState>;
  constructor(
    private readonly store: Store<IAppState>
  ) { }

  ngOnInit(): void {
    this.isLogin$ = this.store.select('login');
  }

  onLogin() {
    this.store.dispatch(login({ username: 'dangkhoa', password: 'anv123' }));
  }

  onLogout() {
    this.store.dispatch(logout());
  }
}
