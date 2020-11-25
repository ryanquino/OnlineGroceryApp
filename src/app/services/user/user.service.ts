import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
export interface UserDetails{
  id: number
  name: string
  email: string
  password: string
}
@Injectable()


export class UserService {

  constructor(private router: Router,
    private http: HttpClient) { }

  public login(username, password){
    if(username == "admin" && password == "admin"){
      this.router.navigateByUrl('/home/dashboard');
    }
    else{
      return false;
    }
  }

  public register(user: UserDetails): Observable<any>{
    return this.http.post('http://localhost:8000/api/register', user, {
      headers: {'Content-Type': 'application/json'}
    })
  }
}
