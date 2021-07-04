import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import "firebase/auth";


@Injectable({
  providedIn: 'root'
})
export class UserService {
  provider = new firebase.auth.GoogleAuthProvider();
  constructor(private http: HttpClient,
    private authUser : AngularFireAuth,
    ) {}

  register(data: any) {
    return new Promise(
      (resolve, reject) => {
        this.authUser.createUserWithEmailAndPassword(data.email, data.password).then(
          (res) => {
            resolve(res);
          },
          (error) => {
            reject(error);
            window.alert(error.errors.message);
          }
        );
      }
    );
  }

  signIn(data: any){
    return this.authUser.signInWithEmailAndPassword(data.email, data.password)
      .then((result) => {
        console.log(result);
      }).catch((error) => {
        window.alert(error.errors.message)
      });
  }

  GoogleAuth() {
    return this.AuthLogin(firebase.auth.GoogleAuthProvider);
  }

  AuthLogin(provider: any) {
    return this.authUser.signInWithPopup(provider)
    .then((result) => {
      console.log(result);
    }).catch((error) => {
      window.alert(error.errors.message)
    })
  }
  

  googleSignInPopup(provider: any) {
    // [START auth_google_signin_popup]
    firebase.auth()
      .signInWithPopup(provider)
      .then((result) => {
        // @type {firebase.auth.OAuthCredential} 
        // const credential = result.credential;
        const user = result.user;
      }).catch((error) => {
        window.alert(error.errors.message)
        
      });
  }
}
