import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private fb: FormBuilder, private router:Router, private fbService: FirebaseService) { }
  signupForm: FormGroup =  this.fb.group({
    email: ['', [Validators.email]],
    username: ['', [Validators.required]],
    password: ['', [Validators.required]]
  });
  ngOnInit(): void {
  }
  submit(): void{
    this.fbService.signUp(new User(this.signupForm.get('email')?.value, this.signupForm.get('password')?.value,))
  }

}
