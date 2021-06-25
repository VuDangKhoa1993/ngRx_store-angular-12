import { RootStoreModule } from './stores/root-store.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MyCounterComponent } from './components/my-counter/my-counter.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { baseUrlConfigLoading, BASE_URL } from '@shared/tokens/tokens';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@shared/share.module';
@NgModule({
  declarations: [
    AppComponent,
    MyCounterComponent,
    LoginComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RootStoreModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [
    {
      provide: BASE_URL,
      useFactory: baseUrlConfigLoading
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
