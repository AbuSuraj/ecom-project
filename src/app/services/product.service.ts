import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { product } from '../data-types';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  cartData = new EventEmitter<product[] | []>();

  constructor(private http: HttpClient, private router: Router) { }
  addProduct(data: product){
    return this.http.post("http://localhost:3000/products", data); 
  }
  productList(){
    return this.http.get<product[]>('http://localhost:3000/products')
  }
  deleteProduct(id:number){
   return this.http.delete(`http://localhost:3000/products/${id}`)
  }
  getAProduct(id:string){
    return this.http.get<product>(`http://localhost:3000/products/${id}`)
  }
  updateProduct( data: product){
    return this.http.put<product>(`http://localhost:3000/products/${data.id}`, data)
  }
  popularProducts(){
    return this.http.get<product[]>('http://localhost:3000/products?_limit=4')
  }
  trendyProducts(){
    return this.http.get<product[]>('http://localhost:3000/products?_limit=8')

  }
  searchProducts(query:string){
    return this.http.get<product[]>(`http://localhost:3000/products?q=${query}`)

  }
  localAddToCart(data:product){
    let cartData = [];
    let localCart = localStorage.getItem('localCart');
    if(!localCart){
      localStorage.setItem('localCart', JSON.stringify([data]));
    }
    else{
      cartData = JSON.parse(localCart);
      cartData.push(data);
      localStorage.setItem('localCart', JSON.stringify(cartData))
    }
    this.cartData.emit(cartData);
  }
  removeFromCart(productId: number){
    let CartData = localStorage.getItem('localCart');
    if(CartData){
      let items:product [] = JSON.parse(CartData);
      items = items.filter((item:product )=> productId !== item.id);
      console.log(items);
      localStorage.setItem('localCart', JSON.stringify(items));
      this.cartData.emit(items);
    }
  }
}
