import { NgModule } from '@angular/core';
import { NgxJquerySliderComponent } from './components/ngx-jquery-slider/ngx-jquery-slider.component';

const components = [
    NgxJquerySliderComponent
]

@NgModule({
  declarations: [
      ...components
  ],
  imports: [
  ],
  exports: [
      ...components
  ]
})
export class SharedModule { }
