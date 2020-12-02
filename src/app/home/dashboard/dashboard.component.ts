import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { CartService } from 'src/app/services/cart/cart.service';
import  { ProductService} from '../../services/product/product.service';
import  { UserService} from '../../services/user/user.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  private headerBannerSlides = {
    autoplay: true,
  }
  private bestSellerSlide = {
    slidesPerView: 2
  }
  private cardSlide = {
    slidesPerView: 5
  }
  @ViewChild('bestSellerSlide', { static: true }) bestSellerSlideElement: IonSlides;
  @ViewChild('cardSlide', { static: true }) cardSlideElement: IonSlides;

  categoryList = []

  bestSellerItems = []

  productList = []

  constructor(
    private productService: ProductService,
    private userService: UserService,
    private cartService: CartService,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
    this.getAllProducts();
    this.getAllCategories();
    this.getAllBestSellers();

    this.userService.getProfile().subscribe(
      data => {
        console.log(data);        
      }
    )    
    
  }

  getAllProducts(){
    this.productService.getAllProducts().subscribe( 
      products => {
        this.productList = products;
      }
    )
  }

  getAllBestSellers(){
    this.productService.getAllBestSellers().subscribe( 
      products => {
        this.bestSellerItems = products;
      }
    )
  }

  getAllCategories(){
    this.productService.getAllCategories().subscribe( 
      data => {
        this.categoryList = data;
      }
    )
  }

  async addToCart(id){
    this.cartService.addToCart(id);

    const alert = await this.alertCtrl.create({header: 'Success', message: 'Item added in cart'});
    await alert.present();
  }



}
