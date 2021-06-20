import { RootStoreModule } from './stores/root-store.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MyCounterComponent } from './components/my-counter/my-counter.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MyCounterComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RootStoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
