import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-my-contact-profile',
  templateUrl: './my-contact-profile.component.html',
  styleUrls: ['./my-contact-profile.component.css']
})
export class MyContactProfileComponent implements OnInit {

  MyAddress1:any;
  MyAddress2:any;   
  MyMobileNumber:any;
  MyEmail:any;
  user: FormGroup;


  /**
  *constructor
  */
  constructor() { 
    this.MyMobileNumber="+91 9767211720";
    this.MyEmail = "shubhamtile@gmail.com";
    this.MyAddress1="Kolhapur, India";
  }

  ngOnInit(): void {

    this.user = new FormGroup({
      name: new FormControl(''),
      subject: new FormControl(''),
      emailId: new FormControl(''),
      message: new FormControl('')
      
    });

  }

  /**
   * Send Message
   */
  SendMessage(){

    var reqBody = this.user.value;
    console.log(reqBody);
    //ready to send webapi

    // this.MyService.sendMessage(reqBody)
    // .subscribe({

    //  });

  }

}
