import { Component, Input, OnInit } from '@angular/core';
import {
  FormGroup,
  FormGroupDirective,
  ReactiveFormsModule,
} from '@angular/forms';
import { TTypeFiled } from './gs-form-type';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'gs-radio',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    @if (field.fieldName!==undefined) {
    <form [formGroup]="formGroup">
      <h3>{{ field.label }}</h3>
      <label *ngFor="let option of field.options">
        <label ngFor="let option of field.options">
          <input
            type="radio"
            [name]="field.fieldName"
            [formControlName]="field.fieldName"
            [value]="option.value"
          />
          {{ option.label }}
        </label>
      </label>
    </form>
    }
  `,
  styles: ``,
})
export class GsRadioComponent implements OnInit {
  @Input() field!: TTypeFiled;
  formGroup!: FormGroup;

  //-------------------------------------------------------------------
  constructor(private form: FormGroupDirective) {}

  //-------------------------------------------------------------------
  ngOnInit(): void {
    this.formGroup = this.form.control;
  }
}
