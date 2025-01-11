import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private menuData: any;

  constructor(private http: HttpClient) {}

  fetchMenuData() {
    return this.http.get('http://localhost:8080/getMenu');
  }

  setMenuData(data: any) {
    this.menuData = data;
  }

  getMenuData() {
    return this.menuData;
  }
}
