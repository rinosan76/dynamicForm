import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TTypeFiled } from './gs-form-type';
import { GsInputComponent } from './gs-input.component';
import { GsCheckboxComponent } from './gs-checkbox.component';
import { GsRadioComponent } from './gs-radio.component';
import { GsSelectComponent } from './gs-select.component';

@Component({
  selector: 'gs-field',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    GsInputComponent,
    GsCheckboxComponent,
    GsRadioComponent,
    GsSelectComponent,
  ],
  template: `
    @switch (field.type) { @case('select'){
    <gs-select [field]="field"></gs-select>
    } @case ('checkbox') {
    <gs-checkbox [field]="field"></gs-checkbox>
    } @case ('radio') {
    <gs-radio [field]="field"></gs-radio>
    } @default {
    <gs-input [field]="field"></gs-input>
    } }
  `,
  styles: ``,
})
export class GsFieldComponent implements OnInit {
  //-------------------------------------------------------------------
  //PUBLIC
  @Input() field!: TTypeFiled;

  //-------------------------------------------------------------------
  //PRIVATE

  //-------------------------------------------------------------------
  ngOnInit(): void {
    // console.log('FIELD', this.field);
  }
}
