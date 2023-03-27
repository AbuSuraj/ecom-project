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
  constructor(private activeRoute: ActivatedRoute, private product: ProductService) { }

  ngOnInit(): void {
    let productId = this.activeRoute.snapshot.paramMap.get('productId');
    console.warn(productId);
    
    productId && this.product.getAProduct(productId).subscribe(data => {
      this.productDetails = data;
    })
  }
  handleQuantity(val: string){
    if(this.productQuantity <20 && val==='plus'){
      this.productQuantity = this.productQuantity+1;
    }
    else if(this.productQuantity > 1 && val==='minus'){
      this.productQuantity = this.productQuantity-1;
    }
  }
}
