import { Component, OnInit } from '@angular/core';
// import * as $ from 'jquery';

@Component({
  selector: 'app-my-personal-profile',
  templateUrl: './my-personal-profile.component.html',
  styleUrls: ['./my-personal-profile.component.css']
})
export class MyPersonalProfileComponent implements OnInit {
  
  MyProjectList:any;
  ProjectTitle:any;
  MySkill:any;
  currentRate = 8;
  /**
  *constructor
  */
  constructor() { 

    this.MyProjectList = [
      {Name:"Recommending products by studying customers buying trend using Hadoop.", Description:"Project is based on Hadoop in which we can receive customer data runtime and store it in HDFS.",Icon:"lnr lnr-database"},
      {Name:"LAN Monitoring Using Android Device.", Description:"Project is based on android application, In that the desktop/laptop screen should be accessible and opeatable and can oprate on mobile device remotely",Icon:"lnr lnr-screen"},
      {Name:"Android WIFI Calling", Description:"This project is based on android application, which provide free calling to another device by using any WIFI router without internet data in particular area.",Icon:"lnr lnr-phone-handset"},
      {Name:"Carpooling Services in cloud computing", Description:"Carpooling is most effective solutions to traffic congestion. It consists of increasing the occupancy rate of cars by reducing the empty seats in effectively.",Icon:"lnr lnr-cloud-sync"},
      {Name:"Smart City", Description:"The Information about each and every comtain of that city is present in application.User can get easily related information.",Icon:"lnr lnr-apartment"},
      {Name:"Ticket-Booking Application", Description:"Application created in both Angular and AngularJS technology.Models: Homepage, seats, payment, success payment, failed payment.",Icon:"lnr lnr-book"}
    ];

    this.MySkill= [
      {Name: "Angular JS", Percentage: "70",Color:"darkgoldenrod"},
      {Name: "Node JS", Percentage: "50",Color:"cornflowerblue"},
      {Name: "Core Java", Percentage: "40",Color:"yellowgreen"},
      {Name: "Core PHP", Percentage: "40",Color:"sienna"},
      {Name: "Android", Percentage: "75",Color:"lightcoral"},
    ]

    this.ProjectTitle='';

  }

  ngOnInit(): void {
  }

  /**
  *Load the slider
  */
  ngAfterViewInit() {
      $(document).ready(function() {
          (<any>$('.owl-carousel')).owlCarousel({
            loop:true,
            margin:15,
            nav:true,
            navText: [""],
            responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
            }
          });

      });
  }

}
