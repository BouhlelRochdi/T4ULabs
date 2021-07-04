import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './Auth/signin/signin.component';
import { SignupComponent } from './Auth/signup/signup.component';
import { UploadFormComponent } from './Uploads/upload-form/upload-form.component';

const routes: Routes = [
  { path: 'auth/signup', component: SignupComponent },
  { path: 'auth/signin', component: SigninComponent },
  { path: 'upload', component: UploadFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
