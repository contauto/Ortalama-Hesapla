import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }
  clickedMe(){
    this.router.navigateByUrl("/aboutMe")
  }

  clickedCalc(){
    this.router.navigateByUrl("/")
  }


}
