import { OrderService } from './../services/order.service';
import { AuthService } from './../services/auth.service';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ShoppingCart } from '../models/shopping-cart';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';
import { Order } from '../models/order';

@Component({
  selector: 'shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.css']
})
export class ShippingFormComponent implements OnInit, OnDestroy {
  @Input('cart') cart: ShoppingCart;
  shipping = {};
  userId: string;
  subscription: Subscription;

  constructor(
    private router: Router,
    private authService: AuthService,
    private orderService: OrderService
  ) { }

  ngOnInit(){
    this.subscription = this.authService.user$.subscribe(user => this.userId = user.uid);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  async placeOrder() {
    let order = new Order(this.userId,this.shipping,this.cart);
    let result = await this.orderService.placeOrder(order);
    
    this.router.navigate(['/order-success', result.key]);
  }

}
