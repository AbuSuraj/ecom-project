import { Login, SignUp } from './../data-types';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent implements OnInit {
  userLogin:Boolean = false;
  authError: string = '';
  constructor(private user:UserService) { }

  ngOnInit(): void {
    this.user.userAuthReload()
  }
  signUp(data:SignUp){
    this.user.userSignUp(data);
 }
 signin(data:Login){
    // this.user.userSignUp(data);
    this.user.userLogin(data);
    this.user.inValidUserAuth.subscribe(result =>{
      if(result){
        this.authError = "please enter valid user authentication"
      }
    })
 }
 openLogin(){
this.userLogin = true
 }
 openSignUp(){
  this.userLogin = false;
 }
}
