import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MenuPageComponent } from './menu-page/menu-page.component';

export const routes: Routes = [
  { path: '', component: LoginComponent }, // Default route
  { path: 'menu', component: MenuPageComponent }, // Menu page
];
