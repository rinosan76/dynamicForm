import { Component, Input, OnInit } from '@angular/core';
import {
  FormGroup,
  FormGroupDirective,
  ReactiveFormsModule,
} from '@angular/forms';
import { TTypeFiled } from './gs-form-type';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'gs-select',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    @if (field.fieldName!==undefined) {
    <form [formGroup]="formGroup">
      <label>{{ field.label }}:</label>
      <select [formControlName]="field.fieldName">
        <option *ngFor="let option of field.options" [value]="option.value">
          {{ option.label }}
        </option>
      </select>
    </form>
    }
  `,
  styles: ``,
})
export class GsSelectComponent implements OnInit {
  @Input() field!: TTypeFiled;
  formGroup!: FormGroup;

  //-------------------------------------------------------------------
  constructor(private form: FormGroupDirective) {}

  //-------------------------------------------------------------------
  ngOnInit(): void {
    this.formGroup = this.form.control;
  }
}
