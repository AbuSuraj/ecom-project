import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login, SignUp } from '../data-types';
import { SellerService } from '../services/seller.service';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {

  constructor(
    private seller:SellerService,
    private router: Router) { } 
    showLogin = false;
    authError:string = "";
  ngOnInit(): void {
  }
  signUp(data:SignUp):void{
    this.seller.userSignUp(data)
  }
  login(data:Login):void{ 
    this.authError= " "
    this.seller.userLogin(data);
    this.seller.isLoginError.subscribe((isError)=>{
      if(isError){
        this.authError = "email or password incorrect";
      }
    })
  }
  openLogin(){this.showLogin = true; }
  openSignUp(){this.showLogin = false; }
}
