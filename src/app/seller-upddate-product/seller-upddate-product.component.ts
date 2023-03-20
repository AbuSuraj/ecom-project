import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { product } from '../data-types';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-seller-upddate-product',
  templateUrl: './seller-upddate-product.component.html',
  styleUrls: ['./seller-upddate-product.component.css']
})
export class SellerUpddateProductComponent implements OnInit {

  productUpdateMessage: undefined | string;
 productData: undefined | product;
  constructor(private product: ProductService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    let productID = this.route.snapshot.paramMap.get('id');
    
    productID && this.product.getAProduct(productID).subscribe(data =>{
      this.productData = data;
      console.log(this.productData)
    })
  }
  submit(data:product){
      if(this.productData){
        data.id = this.productData.id
      }
    this.product.updateProduct( data).subscribe((result)=>{
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
