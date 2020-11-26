import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
export interface UserDetails{
  id: number
  name: string
  email: string
  password: string
}

export interface TokenDetails{
  id: number
  name: string
  email: string
  password: string
  exp: number
  iat: number
}

interface TokenResponse{
  token: string
}
@Injectable()


export class UserService {

  private token: string

  constructor(private router: Router,
    private http: HttpClient) { }
  
  private saveToken(token: string): void{
    localStorage.setItem('userToken', token);
    this.token = token;
  }

  private getToken(): string{
    if(!this.token){
      this.token = localStorage.getItem('userToken');
    }
    return this.token
  }


  public login(user: UserDetails): Observable<any>{
    const base = this.http.post('http://localhost:8000/api/login', {email: user.email, password: user.password}, {
      headers: {'Content-Type': 'application/json'}
    })

    console.log(user);
    
    const request = base.pipe(
      map((data: TokenResponse) =>{
        if(data.token){
          this.saveToken(data.token)
        }
        return data;
      })
    )
    return request

  }

  public register(user: UserDetails): Observable<any>{
    return this.http.post('http://localhost:8000/api/register', user, {
      headers: {'Content-Type': 'application/json'}
    })
  }

  public getProfile(): Observable<any>{
    return this.http.get('http://localhost:8000/api/getProfile', {
      headers: {Authorization: `Bearer ${this.getToken()}`}
    })
  }

  public getUserDetails(): TokenDetails{
    const token = this.getToken();
    let tokenLoad 
    if(token){
      tokenLoad = token.split('.')[1]
      tokenLoad = window.atob(tokenLoad)
      return JSON.parse(tokenLoad)
    }
    else{
      return null
    }
  }
  public isLoggedIn(): boolean{
    const user = this.getUserDetails();
    if(user){
      return true;
    }
    else{
      return false;
    }
  }
  public logout(): void{
    this.token = '';
    window.localStorage.removeItem('userToken');
    this.router.navigateByUrl('/login')
  }
}
