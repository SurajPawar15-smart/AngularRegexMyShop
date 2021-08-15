import { Component, OnInit } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { CartItem } from 'src/app/models/cart-item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
  //cartItems:cartItemsType = [
  
    cartItems:any=[];
    //  { id: 1, proudctId: 1, productName: 'Test 1', qty: 4, price: 100 },
    // { id: 2, proudctId: 3, productName: 'Test 3', qty: 5, price: 50 },
    //  { id: 3, proudctId: 2, productName: 'Test 2', qty: 3, price: 150 },
    //  { id: 4, proudctId: 4, productName: 'Test 4', qty: 2, price: 200 },
  //];
  cartTotal = 0
 
  constructor(private msg: MessengerService,private cartService: CartService) { }

  ngOnInit(): void {
    // this.msg.getMsg().subscribe((product: Product|any) => {
    //   this.addProductToCart(product)
    // })
    this.handleSubscription();
    this.loadCartItems();
  }

  handleSubscription() {
    this.msg.getMsg().subscribe((product: Product) => {
      this.loadCartItems();
    })
  }

  loadCartItems() {
    this.cartService.getCartItems().subscribe((items: CartItem[]) => {
      this.cartItems = items;
      this.calcCartTotal();
    })
  }

  calcCartTotal() {
    this.cartTotal = 0
    this.cartItems.forEach((item:any) => {
      this.cartTotal += (item.qty * item.price)
    })
  }

  // addProductToCart(product: Product) {

  //   let productExists = false

  //   for (let i in this.cartItems) {
  //     if (this.cartItems[i].productId === product.id) {
  //       this.cartItems[i].qty++
  //       productExists = true
  //       break;
  //     }
  //   }

  //   if (!productExists) {
  //     this.cartItems.push({
  //       productId: product.id,
  //       productName: product.name,
  //       qty: 1,
  //       price: product.price
  //     })
  //   }
  //   this.cartTotal = 0
  
  //   this.cartItems.forEach((item:any) => {
  //     this.cartTotal += (item.qty * item.price)
  //   })
  // }

}
