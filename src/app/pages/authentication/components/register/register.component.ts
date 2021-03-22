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
    private validarService: ValidarFormService
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
    return this.formRegister.get('pass1').invalid;
  }

  validarFormRegister() {
    this.formRegister = this.fb.group(
      {
        nick: ['', [Validators.required, Validators.minLength(2)]],
        email: ['', [Validators.required, Validators.email]],
        pass1: ['', Validators.required],
        pass2: ['', [Validators.required]],
      },
      {
        validators: passwordEqual,
      }
    );
  }

  checarSiSonIguales(): boolean {
    return (
      this.formRegister.hasError('noSonIguales') &&
      this.formRegister.get('pass1').dirty &&
      this.formRegister.get('pass2').dirty
    );
  }

  hasError(controlName: string, errorCode: string) {
    const control = this.formRegister.get(controlName) as AbstractControl;
    return control?.touched && control?.hasError(errorCode);
  }

  saveRegister() {
    console.log(this.formRegister.value);
  }
}
