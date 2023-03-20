import { Component, OnInit } from '@angular/core';
import { product } from '../data-types';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent implements OnInit {

  productList: undefined | product[];
  productDeleteMessage: undefined | string;
  constructor(private product: ProductService) { }

  ngOnInit(): void {
    this.list();
  }
  
   deleteProduct(id:number){
    console.log(id);
    this.product.deleteProduct(id).subscribe(result =>{
      if(result){
        this.productDeleteMessage = "Product Deleted Succefully";
        this.list()
      }
    })
    setTimeout(() => {
      this.productDeleteMessage = undefined
    }, 3000);
   }
   list(){
    this.product.productList().subscribe( result =>{
      this.productList = result
    })
   }
}
