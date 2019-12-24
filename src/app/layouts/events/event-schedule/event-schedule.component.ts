import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-event-schedule",
  templateUrl: "./event-schedule.component.html",
  styleUrls: ["./event-schedule.component.scss"]
})
export class EventScheduleComponent implements OnInit {
  constructor() { }

  ngOnInit() { }

  schedule = [
    {
      name: "New Title Showcase",
      totime: "10:00",
      endtime: "12:00",
      description:
        "Looking to get your book into the hands of agents and publishers? Feature your book at the CBF 2020 by displaying your title on the show floor. As an Author Club member you receive a 20% discount to include your book in the New Title Showcase."
      //icon:'assets/images/event/icon.png'
    },
    {
      name: "The Author Club",
      totime: "12:30",
      endtime: "02:30",
      description:
        "The Author Club is an offering from The Cork Book Fair, giving our author audience access to everything we have to offer throughout the year. The Author Club is an expansion of this hugely popular feature, giving our author community access to amazing benefits year round."
      //icon:'assets/images/event/icon.png'
    },
    {
      name: "INTERNATIONAL EXCELLENCE AWARDS 2020",
      totime: "03:00",
      endtime: "06:00",
      description:
        "The hugely-popular International Excellence Awards are now in their 10th consecutive year. Celebrating global markets and showcasing the wealth of success and innovation in the world’s publishing activity outside the Ireland, over 100 nations have received recognition at the CBF since the awards started."
      //icon:'assets/images/event/icon.png'
    }
  ];

  scheduleOne = [
    {
      name: "The Research & Scholarly Publishing Forum",
      totime: "10:00",
      endtime: "12:00",
      description:
        "The Research & Scholarly Publishing Forum 2019 will tackle global trends in Research & Scholarly Publishing, and provide a platform for international publishers to learn, improve business practice, and develop new models and markets."
      //icon:'assets/images/event/icon.png'
    },
    {
      name: "What Works? Education Conference",
      totime: "12:30",
      endtime: "02:30",
      description:
        "What Works? Education Conference is designed specifically for education publishers and all those in education seeking insights into what is working in the classroom today. The 2020 conference chair is Lyndsay Nadin, Pearson."
      //icon:'assets/images/event/icon.png'
    }
  ];
}
