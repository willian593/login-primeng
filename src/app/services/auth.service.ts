import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// firebase
import { AngularFireAuth } from '@angular/fire/auth';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userToken: string;
  constructor(private http: HttpClient, private afAuth: AngularFireAuth) {}

  /*--------------------LOGIN USUARIO--------------------*/
  async login(email: string, password: string) {
    try {
      return await this.afAuth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.log(error.message);
    }
  }

  /*--------------------CREAR NUEVO USUARIO--------------------*/

  async register(email: string, password: string) {
    try {
      return await this.afAuth.createUserWithEmailAndPassword(email, password);
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title:
          'La dirección de correo electrónico ya está siendo utilizada por otra cuenta.',
        text: error.message,
      });
      console.log(error.message);
    }
  }
  /*--------------------CERRAR SESIION--------------------*/

  async logout() {
    try {
      await this.afAuth.signOut();
    } catch (error) {
      console.log(error.message);
    }
  }
  /*--------------------GUARDAR EL TOKEN EN EL LOCALSTORAGE--------------------*/

  saveToken(idToken: string) {
    this.userToken = idToken;
    localStorage.setItem('token', idToken);

    const day = new Date();
    day.setSeconds(3600);
    localStorage.setItem('expira', day.getTime().toString());
  }
}
