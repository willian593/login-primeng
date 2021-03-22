import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationComponent } from './authentication.component';
import { PrimengModule } from '../../modulos/primeng.module';

const componentes = [
  LoginComponent,
  RegisterComponent,
  AuthenticationComponent,
];

@NgModule({
  declarations: [componentes],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    PrimengModule,
  ],
  exports: [componentes],
})
export class AuthenticationModule {}
