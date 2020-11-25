import { Component, OnInit } from '@angular/core';
import { UserService, UserDetails } from '../services/user/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  confirmPassword : string
  credentials: UserDetails = {
    id: 0,
    name: '',
    email: '',
    password: ''
  }
  constructor(private userService: UserService,
    private router: Router) { }

  ngOnInit() {}

  register(){
    if(this.confirmPassword == this.credentials.password){
      this.userService.register(this.credentials).subscribe(
        () =>{
          this.router.navigateByUrl('/login')
        },
        err => {
          console.log(err);
        }
      )
    }
    else{
      console.log(this.confirmPassword);
      console.log(this.credentials.password);
      
      
      console.log('Password doesnt match');
      
    }
  }

}
