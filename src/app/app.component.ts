import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { GsFormComponent } from './_componenti/gs-form.componen';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <gs-form [model]="model"></gs-form>

    <!-- <router-outlet></router-outlet> -->
  `,
  styles: [],
  imports: [CommonModule, ReactiveFormsModule, GsFormComponent],
})
export class AppComponent implements OnInit {
  //-------------------------------------------------------------------
  //PUBLIC
  title = 'dynamicForm';

  model = {
    nome: {
      type: 'text',
      value: 'ciao',
      label: 'Nome',
    },
    cognome: {
      type: 'text',
      value: '',
      label: 'Cognome',
      rules: {
        required: true,
      },
    },
    indirizzo: {
      type: 'text',
      value: '',
      label: 'Indirizzo',
    },
    eta: {
      type: 'number',
      value: '',
      label: 'Età',
    },
    dataNascita: {
      type: 'date',
      value: '',
      label: 'Data di nascita',
    },
    typeBussines: {
      label: 'Bussines Type',
      value: 'premium',
      type: 'radio',
      options: [
        {
          label: 'Enterprise',
          value: '1500',
        },
        {
          label: 'Home',
          value: '6',
        },
        {
          label: 'Personal',
          value: '1',
        },
      ],
    },
    newsletterIn: {
      label: 'Suscribe to newsletter',
      value: 'email',
      type: 'checkbox',
    },
    suscriptionType: {
      label: 'Suscription Type',
      value: 'premium',
      type: 'select',
      options: [
        {
          label: 'Pick one',
          value: '',
        },
        {
          label: 'Premium',
          value: 'premium',
        },
        {
          label: 'Basic',
          value: 'basic',
        },
      ],
    },
  };

  //-------------------------------------------------------------------
  //PRIVATE

  //-------------------------------------------------------------------
  ngOnInit(): void {}
}
