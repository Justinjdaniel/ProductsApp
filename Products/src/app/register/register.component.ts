import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  angForm: FormGroup;  
  registeredUser = {fullName:'', email:'', password:''};

  constructor(private _auth:AuthService, private _router:Router, private formB: FormBuilder) {
    this.createForm();
  }

  createForm(){
    this.angForm = this.formB.group({
      fullName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  registerUser(){
    this._auth.registerUser(this.registeredUser)
    .subscribe(
      res=>{
        console.log(res);
        // localStorage.setItem('token',res['token'])
        this._router.navigate(['login'])
      },
      err=>console.log(err)
    )
  }

  ngOnInit(): void {
  }

}
