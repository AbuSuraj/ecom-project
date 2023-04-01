import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { product } from '../data-types';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  menuType: string = 'default';
  sellerName: string = '';
  searchResult: undefined | product[];
  userName: string = '';
  constructor(private route: Router, private product: ProductService) { }

  ngOnInit(): void {
    this.route.events.subscribe((val:any)=>{
      if(val.url){
        console.log(val.url)
        if(localStorage.getItem('seller') && val.url.includes('seller')){
          console.log("inside seller area")
          this.menuType='seller';
         let sellerStore = localStorage.getItem('seller');
          if(sellerStore){
            let sellerData = sellerStore && JSON.parse(sellerStore)[0];
            this.sellerName = sellerData.name;
          }
        }
        else if(localStorage.getItem('user')){
          this.menuType='user';
          let userStore = localStorage.getItem('user');
            let userData = userStore && JSON.parse(userStore);
            this.userName = userData.name;
        }
        else{
          console.log("outside seller are");
          this.menuType='default'
        }
      }
    })
  }
logout(){
  localStorage.removeItem('seller');
  this.route.navigate(['/'])
}
userLogout(){ localStorage.removeItem('user');
this.route.navigate(['/user-auth'])

}
searchProduct(query: KeyboardEvent){
  if(query){
    const element = query.target as HTMLInputElement;
    console.log(element.value);
    this.product.searchProducts(element.value).subscribe(result =>{
      this.searchResult = result;
      if(result.length >5 ){
        result.length = 5;
      }
    })
  }
}
submitSearch(value: string){
  this.route.navigate([`/search/${value}`])
}
hideSearch(){
  this.searchResult = undefined
}
reDirectTo(id:number){
this.route.navigate([`/detail/${id}`])
// this.route.navigate(['/detail/',id])
// this.route.navigate(['/detail/'+id])
}
}
