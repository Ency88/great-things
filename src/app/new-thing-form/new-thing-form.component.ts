import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {GreatThingsFirebaseService} from '../services/great-things-firebase.service';
import {GreatThingUpload} from '../models/greatThingUpload';

@Component({
  selector: 'app-new-thing-form',
  templateUrl: './new-thing-form.component.html',
  styleUrls: ['./new-thing-form.component.css']
})
export class NewThingFormComponent implements OnInit {

  public greatThingForm: FormGroup;
  selectedFiles: FileList;

  constructor(private formBuilder: FormBuilder,
              private greatThingService: GreatThingsFirebaseService) {
    this.greatThingForm = formBuilder.group({
      title: ['', Validators.required],
      subtitle: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  isErrorVisible(field: string, error: string) {
    return this.greatThingForm.controls[field].dirty
      && this.greatThingForm.controls[field].errors
      && this.greatThingForm.controls[field].errors[error];
  }

  addGreatThing() {
    const file = this.selectedFiles.item(0);
    const currentUpload = new GreatThingUpload(
      this.greatThingForm.controls['title'].value,
      this.greatThingForm.controls['subtitle'].value,
      file
    );
    this.greatThingService.addNew(currentUpload);
  }

  detectFiles(event) {
    this.selectedFiles = event.target.files;
    // TODO: Add showing of image in form
  }

  public isFormValid() {
    return this.selectedFiles && this.greatThingForm.valid;
  }
}
