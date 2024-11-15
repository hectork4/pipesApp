import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrimeNGModule } from '../prime-ng/prime-ng.module';
import { MenuComponent } from './components/menu/menu.component';

import { registerLocaleData } from '@angular/common';
import localeEsAR from '@angular/common/locales/es-AR';
import localeFrCA from '@angular/common/locales/fr-CA';

registerLocaleData(localeEsAR);
registerLocaleData(localeFrCA);

@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    PrimeNGModule
  ],
  exports: [
    MenuComponent
  ]
})
export class SharedModule { }
