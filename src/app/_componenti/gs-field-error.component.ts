import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'gs-field-error',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    @if(formGroup && formGroup.controls && formGroup.controls[fieldName].invalid
    && (formGroup.controls[fieldName].dirty ||
    formGroup.controls[fieldName].touched)){
    @if(formGroup.controls[fieldName].errors?.['required']){
    <div class="alert">Il campo {{ fieldName }} è obbligatorio</div>
    } }
  `,
  styles: ``,
})
export class GsFieldErrorComponent {
  @Input() formGroup!: FormGroup;
  @Input() fieldName!: string;
}
