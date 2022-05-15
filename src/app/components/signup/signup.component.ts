import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private fb: FormBuilder, private router:Router) { }
  signupForm: FormGroup =  this.fb.group({
    email: ['', [Validators.email]],
    username: ['', [Validators.required]],
    password: ['', [Validators.required]]
  });
  ngOnInit(): void {
  }
  submit(): void{
    console.log('submit');
    this.router.navigate([""]);

  }

}
