import { formatDate } from "@angular/common";
import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  Renderer2,
  ViewChild,
} from "@angular/core";
import {
  AbstractControl,
  ControlValueAccessor,
  FormControl,
  FormGroup,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator,
} from "@angular/forms";

@Component({
  selector: "app-datetimepicker",
  templateUrl: "./datetimepicker.component.html",
  styleUrls: ["./datetimepicker.component.css"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: DatetimepickerComponent,
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: DatetimepickerComponent,
      multi: true
    }
  ],
})
export class DatetimepickerComponent implements ControlValueAccessor, Validator, AfterViewInit {
  @Input() form: FormGroup;
  @Input() formControlName: string = "";
  @Input() dateType: string = "YYYY-MM-dd";
  @Input() locale: string = "en-IN";
  @ViewChild("date", { static: false }) inputElementRef: ElementRef;
  @HostListener("input", ["$event.target.valueAsNumber"])
  onInput = (_: any) => {};
  private _uiDate: string;

  constructor() {
  }

  ngAfterViewInit(): void {
    // this.inputElementRef.nativeElement.setAttribute('value', this._uiDate);
  }

  validate(control: AbstractControl): ValidationErrors | null {
    const date = new Date(control.value);
    return date && this.isValidDate(date) ? null : { errorDate: true };
  }

  writeValue(dateISOString: string): void {
    
    const UIDate = formatDate(dateISOString, this.dateType, this.locale);
    this._uiDate = UIDate;
    if(this.inputElementRef) {
      this.inputElementRef.nativeElement.setAttribute('value', UIDate);
    }
  }

  registerOnChange(fn: (_: any) => {}): void {
    this.onInput = (value: number) => {
      fn(this.getValue(value).toISOString());
    };
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState?(isDisabled: boolean): void {
  }

  get formControl(): FormControl {
    return this.form.get(this.formControlName) as FormControl;
  }

  get invalid() {
    return this.formControl.invalid && (this.formControl.touched || this.formControl.dirty) 
  }

  getValue(value: number) {
    if (value) {
      const date = new Date(value);
      return date && this.isValidDate(date)
        ? date
        : { toISOString: () => null };
    }
    return { toISOString: () => null };
  }

  isValidDate(date: number | Date | null): boolean {
    return date instanceof Date && !isNaN(date as unknown as number);
  }
}
