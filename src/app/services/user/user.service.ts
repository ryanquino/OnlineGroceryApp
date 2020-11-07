import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private router: Router) { }

  public login(username, password){
    if(username == "admin" && password == "admin"){
      this.router.navigateByUrl('/home/dashboard');
    }
    else{
      return false;
    }
  }
}
