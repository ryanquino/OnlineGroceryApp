import { Component } from '@angular/core';
import  { UserService} from '../services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  message = "Welcome to Angular World"
  constructor(private user: UserService,
    private router: Router) {}

  public logout(){
    this.user.logout();
  }

}
