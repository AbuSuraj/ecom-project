import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SignUp } from './../data-types';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private router: Router) { }
  userSignUp(user:SignUp){
    // console.log(user);
    this.http.post("http://localhost:3000/users",user,{observe: 'response'}).subscribe(result=>{
      console.log(result);
      if(result){
        localStorage.setItem("user", JSON.stringify(result.body));
        this.router.navigate(['/']);
      }
    })
  }
}