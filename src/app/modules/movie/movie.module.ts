import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieRoutingModule } from './movie-routing.module';
import { EffectsModule } from '@ngrx/effects';
import { MovieEffects } from '@store/effects/movie.effect';
import { StoreModule } from '@ngrx/store';
import { movieFeatureKey, movieReducer } from '@store/reducers/movie.reducer';

@NgModule({
  declarations: [
    MoviesComponent
  ],
  imports: [
    CommonModule,
    MovieRoutingModule,
    StoreModule.forFeature(movieFeatureKey, movieReducer),
    EffectsModule.forFeature([MovieEffects])
  ]
})
export class MovieModule { }
