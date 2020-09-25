import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-pofessional-profile',
  templateUrl: './my-pofessional-profile.component.html',
  styleUrls: ['./my-pofessional-profile.component.css']
})
export class MyPofessionalProfileComponent implements OnInit {
  
  MySkills:any=[];
  MyFullName:any;
  MyDesignation:any;
  MyDesciption:any;
  MyBirthDate:any;
  MyMobileNumber:any;
  MyAddress:any;
  MyEmail:any;
  AboutMyselfInfo:any;
  ProjectTitle:any;
  MyProjectList:any;
  MyAbout:any;
  MyInstagramLink:any;
  MyLinkdinLink:any;

  /**
   * constructor - Information about professional background.
   */
  constructor() {

    this.MyFullName = "SHUBHAM RAVINDRA TILE";
    this.MyDesignation = "FRONT-END DEVELOPER";
    this.MyBirthDate="9th November, 1993";
    this.MyMobileNumber="+91 9767211720";
    this.MyEmail = "shubhamtile@gmail.com";
    this.MyAddress="Kolhapur, India";
    this.MyDesciption="I specialize in efficient Angular applications and CSS & HTML that just work across all platforms and browsers. I care deeply about building interfaces that are usable and pleasant for the most number of people possible";
    
    this.MySkills = [
      {Name:"Angular",Percentage:90},{Name:"TypeScript",Percentage:70},{Name:"Javascript",Percentage:70},
      {Name:"HTML5",Percentage:60},{Name:"CSS",Percentage:60},{Name:"Bootstrap",Percentage:40},
    ]

    this.MyProjectList = [
      {Name:"Golf Club", Description:"Course & Country Golf Club Management Software. Implement role based authorization/access control.For Booking and Reservation.", Icon:"lnr lnr-flag"},
      {Name:"EMPLOYEE INFORMATION SYSTEM", Description:"This is a mock project, In that, we design the front end in AngularJS and backend API in Node.js.", Icon:"lnr lnr-users"},
      {Name:"INTERVIEW PORTAL", Description:"Interview online test by using external API. Student Details, Myportal(test subject-name), Test(questions-one by one), Result.", Icon:"lnr lnr-code"}
    ];
    
    this.AboutMyselfInfo = "My professional life has been 100% driven by my passion for development. For three years, I’ve worked for different websites and mobile application. Right now, I’m excited about the still very complicated WebAssembly, and working towards becoming a Frontend senior. In the following years, I also plan to explore the “server-side” more and become a better-rounded full-stack dev."
    this.ProjectTitle = "I’ve worked on different projects for an frontend platform in organisation, where I was able to drive a 100% growth of company as well as myself from the website medium.";
    this.MyInstagramLink= "https://www.instagram.com/prince_shubhamraj_09/";
    this.MyLinkdinLink="https://www.linkedin.com/in/shubham-tile-833a69bb";
   }

  ngOnInit(): void {
  }

   /**
   * cv download.
   */
  downloadPDF(){
    let link = document.createElement('a');
    link.setAttribute('type', 'hidden');
    link.href = '../../assets/Resume.pdf';
    link.download = 'Resume.pdf';
    document.body.appendChild(link);
    link.click();
    link.remove();
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
