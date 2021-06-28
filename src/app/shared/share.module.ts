import { NgModule } from "@angular/core";
import { NgxJquerySliderComponent } from "./components/ngx-jquery-slider/ngx-jquery-slider.component";
import { DatetimepickerComponent } from "./components/datetimepicker/datetimepicker.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DateTimePickerDirective } from "./directives/datetimepicker.directive";
import { CommonModule } from "@angular/common";

const components = [NgxJquerySliderComponent, DatetimepickerComponent];
const modules = [ReactiveFormsModule, FormsModule, CommonModule];
const directives = [DateTimePickerDirective];
@NgModule({
  declarations: [...components, ...directives],
  imports: [...modules],
  exports: [...components],
})
export class SharedModule {}
