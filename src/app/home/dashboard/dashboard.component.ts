import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import  { ProductService} from '../../services/product/product.service';

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
  categoryList: any = [
    {"category": "Category 1"},
    {"category": "Category 2"},
    {"category": "Category 3"},
    {"category": "Category 4"},
    {"category": "Category 5"},
    {"category": "Category 6"},
    {"category": "Category 7"},
    {"category": "Category 8"},
    {"category": "Category 9"},
    {"category": "Category 10"}
  ]

  bestSellerItems = [
    {'brand': 'JBL', 'model': 'Headphone', 'imagePath': '../../../assets/images/headphones.png'},
    {'brand': 'JBL', 'model': 'Headphone', 'imagePath': '../../../assets/images/headphones.png'},
    {'brand': 'JBL', 'model': 'Headphone', 'imagePath': '../../../assets/images/headphones.png'},
    {'brand': 'JBL', 'model': 'Headphone', 'imagePath': '../../../assets/images/headphones.png'},
  ]

  productList: any

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.getAllProducts();

  }

  getAllProducts(){
    this.productService.getAllProducts().subscribe( 
      products => {
        console.log(products);
      }
    )
  }

}
