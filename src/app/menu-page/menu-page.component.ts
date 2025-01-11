import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { NgFor } from '@angular/common';
import { CommonModule } from '@angular/common';
import { MenuService } from './menu-service';


@Component({
  selector: 'app-menu-page',
  standalone: true,
  imports: [RouterModule, CommonModule,LoginComponent],
  templateUrl: './menu-page.component.html',
  styleUrl: './menu-page.component.scss'
})


export class MenuPageComponent {

  menuData: any;

  constructor(private menuService: MenuService,private http: HttpClient) {}

  ngOnInit() {
    console.log('MenuPageComponent on init initialized');
    const cachedData = this.menuService.getMenuData();
    if (cachedData) {
      this.menuData = cachedData;
    } else {
      this.menuService.fetchMenuData().subscribe(
        (response) => {
          this.menuData = response;
          this.menuService.setMenuData(response);
        },
        (error) => {
          console.error('Error fetching menu data:', error);
        }
      );
    }
  }


}
