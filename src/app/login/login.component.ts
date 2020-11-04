import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  username: string
  password: string
  message: string;
  constructor(private router: Router) { }

  ngOnInit() {
    this.username = '';
    this.password = '';
    this.message = '';
  }

  public login(){
    if(this.username == "admin" && this.password == "admin"){
      this.router.navigateByUrl('/home');
    }
    else{
      this.message = "Invalid username and password";
      
    }
  }

}
