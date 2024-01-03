import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
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
export class GsCheckboxComponent {
  @Input() field!: TTypeFiled;
  @Input() formGroup!: FormGroup;
}
