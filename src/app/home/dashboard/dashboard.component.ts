import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  groceryList: any = [
    {"brand": "nagoya", "description": "sardines", "price": "20.00"},
    {"brand": "holiday", "description": "corned beef", "price": "30.00"},
    {"brand": "lucky me", "description": "noodles", "price": "5.00"},
  ]
  constructor() { }

  ngOnInit() {}

}
