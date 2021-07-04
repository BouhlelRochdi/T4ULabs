
import { Injectable } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import  firebase from 'firebase';
import { Upload } from './upload';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private af: AngularFireModule) { }
  private basePath = '/uploads';
  private uploadTasks? : firebase.storage.UploadTask;

  pushUpload( upload: Upload){
    const storageRef = firebase.storage().ref();
    this.uploadTasks = storageRef.child(`${this.basePath}/${upload.file.name}`).put(upload.file);

    this.uploadTasks.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) => {
        upload.progress = (snapshot.bytesTransferred / snapshot.totalBytes) *100;
      }, (error) => {
        console.log(error);
      },
      () => {
        // upload.url? = this.uploadTasks?.snapshot.downloadURL;
        upload.name = upload.file.name;
      })
  }
}
