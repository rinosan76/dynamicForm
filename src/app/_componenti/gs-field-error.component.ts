import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import {
  FormGroup,
  FormGroupDirective,
  ReactiveFormsModule,
} from '@angular/forms';

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
export class GsFieldErrorComponent implements OnInit {
  formGroup!: FormGroup;
  @Input() fieldName!: string;

  //-------------------------------------------------------------------
  constructor(private form: FormGroupDirective) {}

  //-------------------------------------------------------------------
  ngOnInit(): void {
    this.formGroup = this.form.control;
  }
}
