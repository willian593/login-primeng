import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../../../../models/usuario.models';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ValidarFormService } from '../../../../services/validar-form.service';
import { passwordEqual } from '../../../../utils/password-equal';
import { Router } from '@angular/router';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../../authentication.component.css'],
})
export class RegisterComponent implements OnInit {
  usuario: UsuarioModel;
  formRegister: FormGroup;
  value3: string;

  constructor(
    private fb: FormBuilder,
    private validarService: ValidarFormService,
    private router: Router,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    this.validarFormRegister();
  }

  get nickInvalid() {
    return this.formRegister.get('nick');
  }

  get emailInvalid() {
    return this.formRegister.get('email');
  }

  get password() {
    return this.formRegister.get('password').invalid;
  }

  validarFormRegister() {
    this.formRegister = this.fb.group(
      {
        nick: ['', [Validators.required, Validators.minLength(2)]],
        email: ['@gmail.com', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        repatPass: ['', [Validators.required]],
      },
      {
        validators: passwordEqual,
      }
    );
  }

  checarSiSonIguales(): boolean {
    return (
      this.formRegister.hasError('noSonIguales') &&
      this.formRegister.get('password').dirty &&
      this.formRegister.get('repatPass').dirty
    );
  }

  hasError(controlName: string, errorCode: string) {
    const control = this.formRegister.get(controlName) as AbstractControl;
    return control?.touched && control?.hasError(errorCode);
  }

  async saveRegister() {
    const { email, password } = this.formRegister.value;
    if (this.formRegister.invalid) {
      return Object.values(this.formRegister.controls).forEach((control) => {
        control.markAllAsTouched();
        console.log('formulario no es correcto');
      });
    }

    this.auth.register(email, password);
  }
}
