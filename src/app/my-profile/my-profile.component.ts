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
  MyInstagramLink:any;
  MyLinkdinLink:any;

  /**
  *constructor
  */
  constructor(private router: Router) {
    this.MyTitleName = "SHUBHAM TILE";
    this.MyAbout = "Do you want to be even more successful? Learn to love learning and growth. The more effort you put into improving your skills";
    this.MyInstagramLink= "https://www.instagram.com/prince_shubhamraj_09/";
    this.MyLinkdinLink="https://www.linkedin.com/in/shubham-tile-833a69bb"; 
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

     /**
   * social media link open with new window
   */
  onSocial(value){

    if(value == 'linkedin'){
      console.log(this.MyLinkdinLink);
      window.open(this.MyLinkdinLink, "_blank")
    }
    if(value == 'instagram'){
      window.open(this.MyInstagramLink, "_blank")
    }
    if(value == 'twitter'){
     
    }
    
  }

}
