import { Component, OnInit } from '@angular/core';
import{ProductService} from 'src/app/services/product.service';
import{Product} from 'src/app/models/product';
// import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: Product[] = []; 
  wishlist: number[] = []


  constructor(private productService: ProductService) { }

  //ngOnInit(): void {
    // this.productList = this.productService.getProducts();
    // this.productService.getProducts().subscribe((products) => {
    //   this.productList = products;
  //}
//}


ngOnInit():void {
  this.productService.getProducts().subscribe((products) => {
    this.productList = products;
  })
}
// loadProducts() {
//   this.productService.getProducts().subscribe((products) => {
//     this.productList = products;
//   })
// }

// loadWishlist() {
//   this.wishlistService.getWishlist().subscribe(productIds => {
//     console.log(productIds)
//     this.wishlist = productIds
//   })
// }

}

