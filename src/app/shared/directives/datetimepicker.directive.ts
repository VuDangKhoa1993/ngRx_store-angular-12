import { formatDate } from "@angular/common";
import { Directive, ElementRef, HostListener, Injectable, Input, Renderer2 } from "@angular/core";
import { AbstractControl, ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator } from "@angular/forms";

@Directive({
    selector: 'input[type=date]',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: DateTimePickerDirective,
            multi: true
        },
        {
            provide: NG_VALIDATORS,
            useExisting: DateTimePickerDirective,
            multi: true
        }
    ]
})
export class DateTimePickerDirective implements ControlValueAccessor, Validator {
    constructor(private elementRef: ElementRef, private renderer: Renderer2) { }
    @Input() dateType = 'YYYY-MM-dd';

    @HostListener('input', ['$event.target.valueAsNumber'])
    onInput = (_: any) => {};

    writeValue(dateISOString: string): void {
        // used to write the formcontrol value into the native DOM value. 
        const UIValue = formatDate(dateISOString, this.dateType , 'en-IN');
        this.renderer.setAttribute(
            this.elementRef.nativeElement,
            'value',
            UIValue
        );
    }

    registerOnChange(fn: (_: any) => {}): void {
        this.onInput = (value: number) => {
            fn(this.getDate(value).toISOString());
        }
    }

    registerOnTouched(fn: any): void {
    }
    setDisabledState?(isDisabled: boolean): void {
    }

    getDate(value: number ) {
        if(value) {
            const date = new Date(value);
            return this.isValidDate(date) ? date : { toISOString: () => null }
        }
        return { toISOString: () => null };
    }

    isValidDate(d: Date | number | null) {
        return d instanceof Date && !isNaN(d as unknown as number);
    }

    validate(control: AbstractControl) : ValidationErrors | null {
        const date = new Date(control.value);
        console.log(control.value && this.isValidDate(date) ? null : { date: true })
        return control.value && this.isValidDate(date) ? null : { date: true };
    }

}