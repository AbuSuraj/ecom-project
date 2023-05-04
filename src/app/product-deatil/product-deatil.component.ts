import { product } from './../data-types';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-deatil',
  templateUrl: './product-deatil.component.html',
  styleUrls: ['./product-deatil.component.css']
})
export class ProductDeatilComponent implements OnInit {
productDetails: undefined | product;
productQuantity: number = 1;
quantity: number = 1; 
removeCart: Boolean = false;
  constructor(private activeRoute: ActivatedRoute, private product: ProductService) { }

  ngOnInit(): void {
    let productId = this.activeRoute.snapshot.paramMap.get('productId');
    console.warn(productId);
    
    productId && this.product.getAProduct(productId).subscribe(data => {
      this.productDetails = data;
    })

    let cartData = localStorage.getItem('localCart');
    if(productId && cartData){
      let items = JSON.parse(cartData);
      items = items.filter((item:product) => productId ===item.id.toString());
      if(items.length){
        this.removeCart = true;
      }
      else {
        this.removeCart = false;
      }
    }
  }
  handleQuantity(val: string){
    if(this.productQuantity <20 && val==='plus'){
      this.productQuantity = this.productQuantity+1;
    }
    else if(this.productQuantity > 1 && val==='minus'){
      this.productQuantity = this.productQuantity-1;
    }
  }
  addToCart(){
    if(this.productDetails){
      this.productDetails.quantity = this.productQuantity;
      if(!localStorage.getItem('user')){
        console.log(this.productDetails.quantity);
        this.product.localAddToCart(this.productDetails);
        this.removeCart = true;
      }
      else{
        console.log("loggedin");
      }
    }
  }
  removeToCart(id:number){
    this.product.removeFromCart(id);
    this.removeCart = false;;
  }
}
