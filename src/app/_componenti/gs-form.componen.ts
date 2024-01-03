import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { GsFieldComponent } from './gs-field.component';
import { GsFieldErrorComponent } from './gs-field-error.component';
import { TTypeFiled } from './gs-form-type';

@Component({
  selector: 'gs-form',
  standalone: true,
  template: `
    <h1>Mio form</h1>
    <form [formGroup]="form">
      <div *ngFor="let field of campi">
        <gs-field [formGroup]="form" [field]="field"></gs-field>
        @if (field.fieldName!==undefined) {
        <gs-field-error
          [formGroup]="form"
          [fieldName]="field.fieldName"
        ></gs-field-error>
        }
      </div>
    </form>
  `,
  styles: ``,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    GsFieldComponent,
    GsFieldErrorComponent,
  ],
})
export class GsFormComponent implements OnInit {
  //-------------------------------------------------------------------
  //PUBLIC
  form!: FormGroup;
  @Input() model!: any;

  campi: TTypeFiled[] = [];
  nomeForm: string = 'mioForm';

  //-------------------------------------------------------------------
  //PRIVATE

  //-------------------------------------------------------------------
  ngOnInit(): void {
    this.form = this.creaForm(this.model);
  }

  //-------------------------------------------------------------------
  creaForm(model: any): FormGroup {
    const tmpCampi = this.getFormCtrlCampi(model);
    return new FormGroup(tmpCampi);
  }
  //-------------------------------------------------------------------
  getFormCtrlCampi(model: any) {
    const tmpCampi: { [key: string]: FormControl } = {};
    console.log(model);
    for (const cp of Object.keys(model)) {
      const propCampo = model[cp];
      const validators = this.addValidator(propCampo.rules);
      tmpCampi[cp] = new FormControl(propCampo.value, validators);
      this.campi.push({ ...propCampo, fieldName: cp });
    }
    return tmpCampi;
  }
  //-------------------------------------------------------------------
  private addValidator(rules: {}): Validators {
    if (!rules) {
      return [];
    }

    const validators = Object.keys(rules).map((rule) => {
      switch (rule) {
        case 'required':
          return Validators.required;

        default:
          return [];
      }
    });
    return validators;
  }
}
