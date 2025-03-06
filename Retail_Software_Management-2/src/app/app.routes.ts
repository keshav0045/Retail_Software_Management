import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { HeaderComponent } from './pages/header/header.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { InventoryComponent } from './pages/inventory/inventory.component';
import { OrdersComponent } from './pages/orders/orders.component';


export const routes: Routes = [

  {
    path: '',
    redirectTo: 'main_page',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'header',
    component: HeaderComponent
  },
  {
    path: 'main_page',
    component: MainPageComponent
  },
  {
    path: 'inventory',
    component: InventoryComponent
  },
  {
    path: 'orders',
    component: OrdersComponent
  }
]
