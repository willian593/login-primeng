import { Component, NgZone, OnInit } from '@angular/core';
import { AuthService } from '../../../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioModel } from '../../../../models/usuario.models';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../authentication.component.css'],
})
export class LoginComponent implements OnInit {
  user: UsuarioModel = new UsuarioModel();
  formLogin: FormGroup;
  isSignedIn = false;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone
  ) {}

  ngOnInit(): void {
    this.validarFormLogin();
  }

  ValidarToken() {
    if (localStorage.getItem('email')) {
      this.user.email = localStorage.getItem('email');
      this.isSignedIn = true;
    }
  }

  get emailInvalid() {
    return this.formLogin.get('email');
  }

  validarFormLogin() {
    this.formLogin = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['HOLAcomo123456', [Validators.required]],
    });
  }

  async signIn() {
    const { email, password } = this.formLogin.value;
    try {
      const user = await this.authService.login(email, password);
      // guardar localStorage
      // if (this.isSignedIn) {
      //   localStorage.setItem('email', this.user.email);
      // }
    } catch (error) {
      console.log('error');
    }
  }
}
