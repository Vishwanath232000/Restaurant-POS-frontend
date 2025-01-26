import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
// import { LoginComponent } from '../login/login.component';
import { NgFor } from '@angular/common';
import { CommonModule } from '@angular/common';
import { MenuService } from './menu-service';



@Component({
    selector: 'app-menu-page',
    imports: [RouterModule, CommonModule],
    templateUrl: './menu-page.component.html',
    styleUrl: './menu-page.component.scss'
})


export class MenuPageComponent {
  isCollapsed: boolean = false;

  toggleSidebar(bol: boolean) {
    this.isCollapsed = bol;
  }


  menuData: any;

  constructor(private menuService: MenuService,private http: HttpClient) {}

  ngOnInit() {
    console.log('MenuPageComponent on init initialized');
    const cachedData = this.menuService.getMenuData();
    if (cachedData) {
      this.menuData = cachedData;
      // console.log('Menu data fetched from cache:', cachedData);

    } else {
      this.menuService.fetchMenuData().subscribe(
        (response) => {
          this.menuData = response;
          this.menuService.setMenuData(response);
          // console.log('Menu data fetched:', response);
        },
        (error) => {
          console.error('Error fetching menu data:', error);
        }
      );
    }
  }

  // cart_items: Map<string, number> = new Map();
  cart_items: dict = {};
  no_of_items:number=0;

  addToCart(Item: any){
    if (this.cart_items[Item.item_name] == undefined){
      this.cart_items[Item.item_name] = [1,Item.item_price,Item.item_price];
    }
    else{
      this.cart_items[Item.item_name][0] += 1;
      this.cart_items[Item.item_name][1]=this.cart_items[Item.item_name][0]*Item.item_price
    }

    this.no_of_items+=1;
    console.log(this.cart_items);
    console.log(this.no_of_items);
    this.price+=Item.item_price;
  }

  price:number=0;


  getCartItemNames(): string[] {
    return Object.keys(this.cart_items);
  }

  incrementQuantity(item_name:any):void{
    let price_per_item=this.cart_items[item_name][2];

    this.cart_items[item_name][0]+=1;
    this.cart_items[item_name][1]+=price_per_item;
    this.no_of_items+=1;
    this.price+=price_per_item;
  }


  decrementQuantity(item_name:any):void{
    let price_per_item=this.cart_items[item_name][2];
    if (this.cart_items[item_name][0] == 1){
      delete this.cart_items[item_name];
    }
    else{

    this.cart_items[item_name][0]-=1;
    this.cart_items[item_name][1]-=price_per_item;
    }
    this.no_of_items-=1;
    this.price-=price_per_item;
  }

  inCart(item_name:string):boolean{
    // console.log(`Checking if ${item_name} is in cart:`, item_name in this.cart_items);
    return item_name in this.cart_items;

  }





}

export interface dict{
  [item_name: string] : [number,number,number];
}
