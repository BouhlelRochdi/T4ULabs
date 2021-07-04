import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  signInForm: FormGroup | null = null;
  submited = false;

  constructor(private userService : UserService,
    private router: Router) { }

  ngOnInit(): void {
    this.signInForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    });
  }
  

  verify(){
    this.submited = true;
    if (this.signInForm?.invalid) {
      return;
    }
    else {
      this.userService.signIn(this.signInForm?.value).then(res =>{
        this.router.navigateByUrl('/upload');        
      }, err => {
        window.alert(err)
      })
  }
}

GoogleSignIn(){
  this.userService.GoogleAuth();
}

}
