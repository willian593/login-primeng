import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { map } from 'rxjs/operators';

// firebase
import { AngularFireAuth } from '@angular/fire/auth';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { UsuarioModel } from '../models/usuario.models';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public user: UsuarioModel;
  userToken: string;
  isLoggeIn = false;
  constructor(
    private http: HttpClient,
    private afAuth: AngularFireAuth,
    private ngZone: NgZone,
    private router: Router
  ) {}

  /*--------------------LOGIN USUARIO--------------------*/
  async login(email: string, password: string) {
    const pass =
      'The password is invalid or the user does not have a password.';
    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'Espere por favor...',
    });
    Swal.showLoading();
    try {
      const login = await this.afAuth.signInWithEmailAndPassword(
        email,
        password
      );
      this.ngZone.run(() => {
        this.router.navigateByUrl('dashboard');
      });
      Swal.close();
      console.log(login.user);
      return login;
    } catch (error) {
      if (error.message === pass) {
        Swal.fire({
          icon: 'error',
          title: 'La contraseña es incorrecta',
          // text: error.message,
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'El correo es incorrecto',
          // text: error.message,
        });
      }
    }
  }

  /*--------------------CREAR NUEVO USUARIO--------------------*/

  async register(email: string, password: string) {
    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'Espere por favor...',
    });
    Swal.showLoading();
    try {
      const register = await this.afAuth.createUserWithEmailAndPassword(
        email,
        password
      );
      this.ngZone.run(() => {
        this.router.navigateByUrl('dashboard');
      });
      Swal.close();
      console.log(register);
      return register;
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Este correo ya esta registrado.',
        text: error.message,
      });
      console.log(error.message);
    }
  }
  /*--------------------CERRAR SESION--------------------*/

  async logout() {
    try {
      await this.afAuth.signOut();
      localStorage.removeItem('token');
      this.router.navigateByUrl('login');
    } catch (error) {
      console.log(error.message);
    }
  }
  /*--------------------GUARDAR EL TOKEN EN EL LOCALSTORAGE--------------------*/

  private saveToken(idToken: string) {
    this.userToken = idToken;
    localStorage.setItem('token', idToken);

    const day = new Date();
    day.setSeconds(3600);
    localStorage.setItem('expira', day.getTime().toString());
  }

  readyToken() {
    if (localStorage.getItem('token')) {
      this.userToken = localStorage.getItem('token');
    } else {
      this.userToken = '';
    }
    return this.userToken;
  }

  /*--------------------GUARDAR EL TOKEN EN EL LOCALSTORAGE--------------------*/
}
