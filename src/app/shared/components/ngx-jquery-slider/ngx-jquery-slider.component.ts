import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
declare var $: any;

@Component({
  selector: 'app-ngx-jquery-slider',
  templateUrl: './ngx-jquery-slider.component.html',
  styleUrls: ['./ngx-jquery-slider.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: NgxJquerySliderComponent,
      multi: true
    }
  ]
})
export class NgxJquerySliderComponent implements AfterViewInit, ControlValueAccessor {
  @ViewChild('location', { static: true }) location: ElementRef;
  onChange: any;
  value: any;
  widget: any;

  constructor() { }

  writeValue(value: any): void {
    this.value = value;
    if(this.widget && value) {
      this.widget.slider('value', value);
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void { }
  
  setDisabledState?(isDisabled: boolean): void {  }

  ngAfterViewInit() {
    this.widget = $(this.location.nativeElement).slider(this.value);
    this.widget.on('slidestop', (event, ui) => {
      this.onChange(ui.value);
    });
  }
}
