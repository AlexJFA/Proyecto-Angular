import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
// import { CookieService } from 'ngx-cookie-service/public-api';
import { CookieService } from 'ngx-cookie-service';


// import { Auth, signInWithEmailAndPassword, signOut, getAuth, } from 'firebase/auth';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private _router: Router, private _cookieService:CookieService) {}

  public tokenUser: string;
  // public cookieToken: string;

  login(email: string, password: any) {

    // autenticamos  el usaurio con firebase con el email y paswwor que llegan por parametro de nuestro metodo "login"
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        // traeme el IDtoken del usuario que se encuentra logueado
        auth.currentUser?.getIdToken().then((token) => {
          // asigna el valor del "IDtoken" a nuestra variable "tokenUser" 
          this.tokenUser = token;
          // asigna el valor del "IDtoken" a nuestra variable "tokenUser" 
          this._cookieService.set("tokenCookie", this.tokenUser)
          // nos redireccion al componente "home"
          this._router.navigateByUrl('/home');
        });
      })
      .catch((error) => console.log(error));
  }

  // retorna el token del usuario logueado
  getIdToken() {
    // return this.tokenUser;
    return this._cookieService.get("tokenCookie")
  }

  estaLogueado() {
    // return this.tokenUser;
    return this._cookieService.get("tokenCookie")
  }

  logout() {
    
    const auth = getAuth()
    signOut(auth)
    .then(
      result => {
        // le asignamos un valor  vacio a nuestra variable "tokenUser" y nuestra cookie "tokenCookie"  la cual almacenaba nuentro token del usuario logueado.
        this.tokenUser = "";
        this._cookieService.set("tokenCookie",this.tokenUser);
        // nos redirecciona al componente "home"
         this._router.navigateByUrl('/login');
         //reinicia la pagina para que actualice los cambios
         window.location.reload();
      },
      error => (error)
    )

  }

}
