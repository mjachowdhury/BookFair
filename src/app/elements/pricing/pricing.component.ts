import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  pricing = [
    {
      icon: "rocket-ship",
      package: "Child Ticket",
      feature1: "Children Under",
      feature2: "10 years old",
      //feature3: "Free Forever",
      price: "3",
      btn: "purchase"
    },
    {
      icon: "diamond",
      package: "Re-entry Promotion",
      feature1: "One time ",
      feature2: "Free Admission",
      //feature3: "Free Forever",
      price: "5",
      btn: "purchase"
    },
    {
      icon: "pie-chart",
      package: "Adult Ticket",
      feature1: "Morning Admission",
      feature2: "Before 12 3 euros",
      //feature3: "3 euros",
      price: "5",
      btn: "purchase"
    }
  ];

  pricingcarouselOptions = {
    items: 3,
    margin: 30,
    nav: false,
    autoplay: false,
    slideSpeed: 300,
    paginationSpeed: 400,
    loop: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
        margin: 10
      },
      480: {
        items: 2,
        margin: 10
      },
      992: {
        items: 3,
        margin: 10
      }
    }
  };

}
