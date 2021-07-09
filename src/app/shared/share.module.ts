import { NgModule } from "@angular/core";
import { NgxJquerySliderComponent } from "./components/ngx-jquery-slider/ngx-jquery-slider.component";
import { DatetimepickerComponent } from "./components/datetimepicker/datetimepicker.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DateTimePickerDirective } from "./directives/datetimepicker.directive";
import { CommonModule } from "@angular/common";
import { AuFaInputComponent } from "./components/au-fa-input/au-fa-input.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome"; //Import here

const components = [
  NgxJquerySliderComponent,
  DatetimepickerComponent,
  AuFaInputComponent,
];

const modules = [
  CommonModule,
  ReactiveFormsModule,
  FormsModule,
  FontAwesomeModule,
];
const directives = [];

@NgModule({
  declarations: [...components, ...directives],
  imports: [...modules],
  exports: [...components, ...modules],
})
export class SharedModule {}
