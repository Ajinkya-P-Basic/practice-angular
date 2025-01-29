import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  userData: any;
  loginForm!: FormGroup;
  submitted: boolean = false;
  constructor(private user: UserService, private fb: FormBuilder) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      name: ['',[Validators.required]],
      dob: ['',[Validators.required]]
    })
    // this.user.currentUserData.subscribe(userData => (this.userData = userData));
  }

  changeData(event:any) {
    var msg = event.target.value;
    // this.user.changeData(msg);
  }

  login() {
    this.submitted = true;
    if(this.loginForm.valid){

    }
    // this.user.changeData(data);
  }
}
