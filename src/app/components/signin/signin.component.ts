import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private fb: FormBuilder, private fbService: FirebaseService) { }
  loginForm: FormGroup =  this.fb.group({
    email: ['', [Validators.email]],
    password: ['', [Validators.minLength(6)]]
  });
 
  ngOnInit(): void {
  }
  submit(): void{
    this.fbService.signIn(this.loginForm.value);
  }

}
