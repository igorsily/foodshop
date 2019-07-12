import { Component, OnInit } from '@angular/core';
declare const $: any;

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;

}
export const ROUTES: RouteInfo[] = [
  { path: '/perfil', title: 'Perfil', icon: 'person' },
  {
    title: 'E-commerce',
    icon: 'shopping-cart-outline',
    path: '/pages/dashboard',
  },
  {
    title: 'IoT Dashboard',
    icon: 'home-outline',
    path: '/pages/iot-dashboard',
  },

];

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {

    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  };

}
