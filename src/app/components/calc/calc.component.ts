import { ValidationService } from './../../services/validation.service';

import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormArray } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Notes } from 'src/app/models/notes';
@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css'],
})

export class CalcComponent implements OnInit {
  ortalama:number=0;
  totalCredit:number=0;
  result:number=0;
  notes: Notes[] = [
    {value: 4, viewValue: 'AA'},
    {value: 3.5, viewValue: 'BA'},
    {value: 3, viewValue: 'BB'},
    {value: 2.5, viewValue: 'CB'},
    {value: 2, viewValue: 'CC'},
    {value: 1.5, viewValue: 'DC'},
    {value: 1, viewValue: 'DD'},
    {value: 0.5, viewValue: 'FD'},
    {value: 0, viewValue: 'FF'}
  ];
  numberOfLecture: number
  form = this.fb.group({
    credit: this.fb.control([]),
    note: this.fb.control([]),
    lessons: this.fb.array([])
  });

  constructor(private fb: FormBuilder, private activatedRoute: ActivatedRoute,public validationService:ValidationService) {
    this.numberOfLecture = Number(activatedRoute.snapshot.paramMap.get("numberOfLecture"))

  }
  ngOnInit(): void {
    for (let index = 0; index < this.numberOfLecture; index++) {

      const lessonForm = this.fb.group({
        credit: ['', [Validators.required,Validators.pattern("^[0-9]*$")]],
        note: ['', Validators.required]
      });
      this.lessons.push(lessonForm);

    }
  }

  get lessons() {
    return this.form.controls["lessons"] as FormArray;
  }

  addLesson() {
    if(this.getControls.lessons.valid){
      for (let index = 0; index < this.numberOfLecture; index++) {
        this.ortalama=this.ortalama+(this.lessons.value[index].credit*this.lessons.value[index].note.value)

  this.totalCredit=Number(this.lessons.value[index].credit)+this.totalCredit
      }
      this.ortalama=this.ortalama/this.totalCredit
      this.result=Number(this.ortalama)
      this.ortalama=0;
      this.totalCredit=0}

  }
  displayFn(notes:Notes): string {
    return notes && notes.viewValue ? notes.viewValue : '';
  }

  get getControls() {
    return this.form.controls;
  }
}
