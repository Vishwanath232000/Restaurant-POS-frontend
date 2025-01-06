import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-menu-page',
  standalone: true,
  imports: [],
  templateUrl: './menu-page.component.html',
  styleUrl: './menu-page.component.scss'
})


export class MenuPageComponent {
  menuData: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getMenu();
  }

  getMenu() {
    this.http.get('http://localhost:8080/getMenu').subscribe(
      (response) => {
        this.menuData = response;
        console.log(this.menuData);
      },
      (error) => {
        console.error('Error fetching menu data:', error);
      }
    );
  }


}
