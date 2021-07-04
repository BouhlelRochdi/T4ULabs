import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './Auth/signup/signup.component';
import { SigninComponent } from './Auth/signin/signin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserService } from './Services/user.service';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { UploadListComponent } from './Uploads/upload-list/upload-list.component';
import { UploadFormComponent } from './Uploads/upload-form/upload-form.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    UploadListComponent,
    UploadFormComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    CommonModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    ModalModule.forRoot(),
    ModalModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
