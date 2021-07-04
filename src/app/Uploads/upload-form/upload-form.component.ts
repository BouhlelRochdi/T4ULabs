import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UploadService } from '../upload.service';
import { Upload } from '../upload';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { ModalModule } from 'ngx-bootstrap/modal';

// import * as _ from "lodash";

@Component({
  selector: 'app-upload-form',
  templateUrl: './upload-form.component.html',
  styleUrls: ['./upload-form.component.css']
})
export class UploadFormComponent implements OnInit {
  @ViewChild('uploadModal') public uploadModal? : ModalDirective;

  uploadForm? : FormGroup;
  selectedFile? : FileList;
  currentUpload? : Upload;
  filterQuery?: [];


  constructor(private uploadService : UploadService) { }

  ngOnInit(): void {
    this.uploadForm = new FormGroup({
      // id: new FormControl(''),
      // file: new FormControl('')
    });
  }


  showPreview(event: any){
    this.selectedFile = event.target.files;
  }

  uploadFile(){
    const file = this.selectedFile?.item(0);
    // this.currentUpload = new Upload(file);
    // this.uploadService.pushUpload(this.currentUpload);
  }

  openLg() {
    this.uploadModal?.show();
  }

}
