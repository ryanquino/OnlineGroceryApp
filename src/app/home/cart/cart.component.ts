import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {

  cartItems = []
  constructor(private modalCtrl: ModalController,
    private cartService: CartService) { }

  ngOnInit() {
    this.getCartItems()
  }

  closeModal(){
    this.modalCtrl.dismiss();
  }

  getCartItems(){
    this.cartItems = JSON.parse(localStorage.getItem('cart'));
    console.log(this.cartItems);    
  }

  removeCartItem(id){
    this.cartService.removeItem(id)
  }
}
