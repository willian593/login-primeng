import { NgModule } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { DividerModule } from 'primeng/divider';

const modulosPrimeng = [
  CardModule,
  ButtonModule,
  TabViewModule,
  PasswordModule,
  InputTextModule,
  DividerModule,
];

@NgModule({
  declarations: [],
  imports: [modulosPrimeng],
  exports: [modulosPrimeng],
})
export class PrimengModule {}
