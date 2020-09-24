import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  MyTitleName:any;
  MyAbout:any;

  /**
  *constructor
  */
  constructor(private router: Router) {
    this.MyTitleName = "SHUBHAM TILE";
    this.MyAbout = "Do you want to be even more successful? Learn to love learning and growth. The more effort you put into improving your skills";
   }

  ngOnInit(): void {
  }

  /**
  *Personal Details Page Load
  */ 
  onAbout(){
    this.router.navigate(['my-personal-profile']); 
  }

  /**
  # Professional Details Page Load
  */ 
  onHome(){
    this.router.navigate(['my-professional-profile']); 
  }

  /**
  *Contact Details Page Load
  */
  onContact(){
    this.router.navigate(['my-contact-profile']); 
  }

}
