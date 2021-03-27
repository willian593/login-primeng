import { NgModule } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { DividerModule } from 'primeng/divider';
import { CheckboxModule } from 'primeng/checkbox';
import { MenubarModule } from 'primeng/menubar';

const modulosPrimeng = [
  CardModule,
  ButtonModule,
  TabViewModule,
  PasswordModule,
  InputTextModule,
  DividerModule,
  CheckboxModule,
  MenubarModule,
];

@NgModule({
  declarations: [],
  imports: [modulosPrimeng],
  exports: [modulosPrimeng],
})
export class PrimengModule {}
