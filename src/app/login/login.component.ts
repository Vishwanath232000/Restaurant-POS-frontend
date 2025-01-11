
import {Component, effect, inject, OnInit} from '@angular/core';
import {RouterModule} from "@angular/router";
import { MenuPageComponent } from '../menu-page/menu-page.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule,MenuPageComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  ngOnInit() {
    console.log('LoginComponent initialized');
  }

  ngOnDestroy() {
    console.log('LoginComponent destroyed');
  }

}
