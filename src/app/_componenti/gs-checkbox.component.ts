import { Component, Input, OnInit } from '@angular/core';
import {
  FormGroup,
  FormGroupDirective,
  ReactiveFormsModule,
} from '@angular/forms';
import { TTypeFiled } from './gs-form-type';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'gs-checkbox',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    @if (field.fieldName!==undefined) {
    <form [formGroup]="formGroup">
      <label>
        {{ field.label }}
        <input
          type="checkbox"
          [name]="field.fieldName"
          [formControlName]="field.fieldName"
          [value]="field.value"
        />
      </label>
    </form>
    }
  `,
  styles: ``,
})
export class GsCheckboxComponent implements OnInit {
  @Input() field!: TTypeFiled;
  formGroup!: FormGroup;

  //-------------------------------------------------------------------
  constructor(private form: FormGroupDirective) {}

  //-------------------------------------------------------------------
  ngOnInit(): void {
    this.formGroup = this.form.control;
  }
}
