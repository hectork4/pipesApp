import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {
  // i18n Select
  public name:string = 'Cosme'
  public gender: 'male' | 'female' = 'male'
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }

  changeClient() {
    this.name = this.name === 'Cosme' ? 'Carla' : 'Cosme';
    this.gender = this.gender === 'female' ? 'male' : 'female';
  }

  //i18nPlural
  public clients: string[] = ['Cosme', 'Fulanito', 'Menganito', 'Zultanito', 'Pepito'];
  public clientsMap = {
    '=0': 'no tenemos clientes esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  deleteClient() {
    this.clients.shift();
  }

  // KeyValue Pipe
  public person = {
    name: 'Cosme',
    age: 500,
    address: 'Calle falsa 123'
  }

  // Async Pipe
  public myObservableTimer = interval(2000).pipe(
    tap( value => console.log('interval', value))
  );

  public promiseValue:Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de promesa');
      console.log('Tenemos data en la promesa');
      this.person.name = 'Cosme Fulanito';
    }, 3500);
  })
}
