import { Component } from '@angular/core';
import { UserService} from '../services/user/user.service';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { CartComponent } from './cart/cart.component';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  message = "Welcome to Angular World"
  constructor(private user: UserService,
    private router: Router,
    private modalCtrl: ModalController) {}

  public logout(){
    this.user.logout();
  }

  async openCartModal(){
    const modal = await this.modalCtrl.create({
      component: CartComponent
    });
    
    await modal.present();
  }

}
