import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class GuardianGuard implements CanActivate {

  constructor(private loginService:LoginService, private _router:Router){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    
    if(this.loginService.estaLogueado()){
      return true;
    }else{

      this._router.navigateByUrl("/login");
      alert("Para acceder a esta seccion debe Iniciar sesión previamente")
      return false
    }
    
  }
  
}
