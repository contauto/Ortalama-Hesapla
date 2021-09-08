import { ValidationService } from './../../services/validation.service';

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  numberOfLecture:number
  lectureCountForm:FormGroup
  loading: boolean;
  constructor(public validationService:ValidationService,private router: Router) { }

  ngOnInit() {
    this.lectureCountForm = new FormGroup({
      numberOfLecture: new FormControl("", Validators.required),
  })}
  get getControls() {
    return this.lectureCountForm.controls;
  }
  onSubmit() {
    if (this.lectureCountForm.valid) {
      this.loading = true;
        this.router.navigateByUrl("/ders/"+this.lectureCountForm.value.numberOfLecture)
      }
    }
  }


