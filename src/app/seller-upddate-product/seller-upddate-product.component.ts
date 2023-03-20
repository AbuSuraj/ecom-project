import { Component, OnInit } from '@angular/core';
import { product } from '../data-types';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-seller-upddate-product',
  templateUrl: './seller-upddate-product.component.html',
  styleUrls: ['./seller-upddate-product.component.css']
})
export class SellerUpddateProductComponent implements OnInit {

  productUpdateMessage: undefined | string;

  constructor(private product: ProductService) { }

  ngOnInit(): void {
  }
  submit(data:product){
    console.log(data)
    this.product.updateProduct(data.id, data).subscribe((result)=>{
      console.log(result);
      if(result){
        this.productUpdateMessage = "Product is successfully updated."
      }
      setTimeout(() => {
        this.productUpdateMessage = undefined
      }, 3000);
    })
  }
}
