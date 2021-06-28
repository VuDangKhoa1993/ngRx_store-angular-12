import { Component, HostListener, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "app-datetimepicker",
  templateUrl: "./datetimepicker.component.html",
  styleUrls: ["./datetimepicker.component.css"],
})
export class DatetimepickerComponent implements OnInit {
  public fg: FormGroup;
  constructor() {}
 
  ngOnInit(): void {
    this.fg = new FormGroup({
      dateTimePicker: new FormControl(new Date().toISOString()),
    });
  }

  get date(): FormControl {
    return this.fg.get("dateTimePicker") as FormControl;
  }
}
