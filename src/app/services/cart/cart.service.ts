import { Injectable } from '@angular/core';
import { ProductService } from '../product/product.service';

export interface CartDetails{
  id: number
  brand: string
  productName: string
  description: string
  price: number
  imagePath: string
  quantity: number

}
@Injectable({
  providedIn: 'root'
})
export class CartService {

  productList = []
  cartDetails: CartDetails[] = []
  cartItems = []
  constructor(private productService: ProductService) { }

  public addToCart(id){
    this.productService.getAllProducts().subscribe( 
      products => {
        this.productList = products;
      }
    )    

    for (let index = 0; index < this.productList.length; index++) {
      let carExist = false;
      if(id == this.productList[index].id){
        this.cartItems.push(this.productList[index])
        localStorage.setItem('cart', JSON.stringify(this.cartItems));
      }      
    }
  }

  public removeItem(id){
    this.cartItems = JSON.parse(localStorage.getItem('cart'));
    
    this.cartItems = this.cartItems.filter(cart => cart.id !== id);

    localStorage.setItem('cart', JSON.stringify(this.cartItems));
  }
}
