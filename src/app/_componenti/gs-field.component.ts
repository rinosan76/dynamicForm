import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TTypeFiled } from './gs-form-type';
import { GsInputComponent } from './gs-input.component';
import { GsCheckboxComponent } from './gs-checkbox.component';
import { GsRadioComponent } from './gs-radio.component';
import { GsSelectComponent } from './gs-select.component';

@Component({
  selector: 'gs-field',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    GsInputComponent,
    GsCheckboxComponent,
    GsRadioComponent,
    GsSelectComponent,
  ],
  template: ` <ng-container #contCampo> </ng-container> `,
  styles: ``,
})
export class GsFieldComponent implements OnInit, AfterViewInit {
  //-------------------------------------------------------------------
  //PUBLIC
  @Input() field!: TTypeFiled;
  @ViewChild('contCampo', { read: ViewContainerRef })
  contCampo!: ViewContainerRef;

  //-------------------------------------------------------------------
  //PRIVATE
  private componentiSupportati = [
    {
      name: 'text',
      component: GsInputComponent,
    },
    {
      name: 'number',
      component: GsInputComponent,
    },
    {
      name: 'select',
      component: GsSelectComponent,
    },
    {
      name: 'radio',
      component: GsRadioComponent,
    },
    {
      name: 'date',
      component: GsInputComponent,
    },
    {
      name: 'checkbox',
      component: GsCheckboxComponent,
    },
  ];

  //-------------------------------------------------------------------
  constructor(private cd: ChangeDetectorRef) {}
  //-------------------------------------------------------------------
  ngOnInit(): void {
    // console.log('FIELD', this.field);
  }
  //-------------------------------------------------------------------
  ngAfterViewInit(): void {
    this.registraCampi();
  }
  //-------------------------------------------------------------------
  private registraCampi() {
    this.contCampo.clear();
    const tmp = this.selezionaTipo(this.field.type);
    const componente = this.contCampo.createComponent(tmp);
    componente.setInput('field', this.field);
    this.cd.detectChanges();
  }
  //-------------------------------------------------------------------
  selezionaTipo(type: string): any {
    const rit = this.componentiSupportati.find((c) => c.name === type);
    return rit?.component || GsInputComponent;
  }
}
