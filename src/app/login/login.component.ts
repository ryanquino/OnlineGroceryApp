import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService, TokenDetails, UserDetails } from '../services/user/user.service';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  credentials: UserDetails = {
    id: 0,
    name: '',
    email: '',
    password: ''
  }
  output: JSON;

  constructor(private router: Router, 
    private user: UserService, 
    private toastCtrl:ToastController) { }

  ngOnInit() {

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
    this.user.login(this.credentials).subscribe(
      () => {
        this.router.navigateByUrl('/home/dashboard');
      },
      err => {
        this.openToast('Error occured');
      }
    )
  }

}
