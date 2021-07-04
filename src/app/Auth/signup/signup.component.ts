import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { passwordMatch } from 'src/app/classes/password-match';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  addUser : FormGroup | null= null;
  submited = false;

  constructor(private userService : UserService,
    private router : Router) { }

  ngOnInit(): void {
    this.addUser = new FormGroup({
      name: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required)
    },
    { validators: passwordMatch});
  }

  validateUser() {
    this.submited = true;
    if (this.addUser?.invalid) {
      return;
    }
    else {
      this.userService.register(this.addUser?.value).then(res =>{
        this.router.navigateByUrl('/auth/signin');        
      }, err => {
        window.alert(err)
      })
    }

  }
}
