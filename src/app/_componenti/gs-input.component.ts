import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TTypeFiled } from './gs-form-type';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'gs-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    @if (field.fieldName!==undefined) {
    <form [formGroup]="formGroup">
      <label>{{ field.label }}</label>
      <input [type]="field.type" [formControlName]="field.fieldName" />
    </form>
    }
  `,
  styles: ``,
})
export class GsInputComponent {
  @Input() field!: TTypeFiled;
  @Input() formGroup!: FormGroup;
}
