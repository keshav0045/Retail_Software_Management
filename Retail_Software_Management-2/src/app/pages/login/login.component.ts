import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { HttpClient } from '@angular/common/http';


@Component({
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  showRegisterForm = signal<boolean>(false);
  http = inject(HttpClient)
  router = inject(Router)

  //usnig templet form
  customerObj: any ={
    "userId": 0,
    "userName": "",
    "emailId": "",
    "fullName": "",
    "password": ""
  };
 
  //using reactive form
  loginForm: FormGroup = new FormGroup({
    userName: new FormControl(""),
    password: new FormControl("")
  })
 


  changeView() {
    // Change view from login to register
    this.showRegisterForm.set(!this.showRegisterForm())
  }


  onRegister(){
    debugger;
    this.http.post("https://projectapi.gerasim.in/api/BankLoan/RegisterCustomer",this.customerObj).subscribe((res:any)=>{
      if(res.result){
        alert('Customer registered successfully')
      }else{
        alert(res.message)
      }
    },error=>{
      alert('Network Error')
    })
  }

  onLogin(){
    debugger;
    const formValue = this.loginForm.value
    this.http.post("https://projectapi.gerasim.in/api/BankLoan/login",formValue).subscribe((res:any)=>{
      debugger;
      if(res.result){
        sessionStorage.setItem("bankuser",JSON.stringify(res.data))
        this.router.navigateByUrl('/header')  // on successfull login customer will redirect to application-list page
      }else{
        alert(res.message)
      }
    },error=>{
      alert('Network Error')
    })
  }

}
