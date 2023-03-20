import { Component, OnInit } from '@angular/core';
import { faTrash,faEdit } from '@fortawesome/free-solid-svg-icons';
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
  productUpdateMessage: undefined | string;
  constructor(private product: ProductService) { }

  deleteIcon = faTrash;
  updateIcon = faEdit;
  ngOnInit(): void {
    this.list();
  }

   deleteProduct(id:number){
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

   editProduct(id:number ){
    const data = 3;
   
   }
   list(){
    this.product.productList().subscribe( result =>{
      this.productList = result
    })
   }
}
