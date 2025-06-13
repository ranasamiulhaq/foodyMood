import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RestaurantListComponent } from './pages/restaurant-list/restaurant-list.component';
import { RestaurantDetailComponent } from './pages/restaurant-detail/restaurant-detail.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'restaurants', component: RestaurantListComponent },
  { path: 'restaurants/:id', component: RestaurantDetailComponent },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'login', component: LoginComponent },
];