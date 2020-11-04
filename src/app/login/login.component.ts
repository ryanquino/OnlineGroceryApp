import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user/user.service';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  username: string
  password: string
  message: string;
  constructor(private router: Router, private user: UserService, private toastCtrl:ToastController) { }

  ngOnInit() {
    this.username = '';
    this.password = '';
    this.message = '';
  }

  async openToast(message){
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 5000,
      animated: false,
      keyboardClose: true,
      position: "middle"
    });
    toast.present();
  }

  public login(){
    if(!this.user.login(this.username, this.password)){
      this.openToast("Invalid username and password");
    }
  }

}
