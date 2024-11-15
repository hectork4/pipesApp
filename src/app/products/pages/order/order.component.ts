import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styles: ``
})
export class OrderComponent {
  public isUpperCase: boolean = true;
  public sortBy?: keyof Hero | undefined | '' = '';

  public heroes: Hero[] = [{
    name: 'Superman',
    canFly: true,
    color: Color.blue
  },
  {
    name: 'Batman',
    canFly: false,
    color: Color.black
  },
  {
    name: 'Robin',
    canFly: false,
    color: Color.green
  },
  {
    name: 'Flash',
    canFly: true,
    color: Color.red
  },
  {
    name: 'Aquaman',
    canFly: false,
    color: Color.green
  }
]

  toggleUpperCase(): void {
    this.isUpperCase = !this.isUpperCase;
  }

  changeOrder(value: keyof Hero): void {
    this.sortBy = value;
  }

}
