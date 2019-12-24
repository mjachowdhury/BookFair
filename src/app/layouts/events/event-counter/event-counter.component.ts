import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-event-counter",
  templateUrl: "./event-counter.component.html",
  styleUrls: ["./event-counter.component.scss"]
})
export class EventCounterComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  counter = [
    {
      count: "35",
      img: "assets/images/event/counter/1.png",
      type: "Total Topics"
    },
    {
      count: "50",
      img: "assets/images/event/counter/2.png",
      type: "TOTAL SPEAKER"
    },
    {
      count: "150",
      img: "assets/images/event/counter/3.png",
      type: "TOTAL EVENT"
    },
    {
      count: "20000",
      img: "assets/images/event/counter/4.png",
      type: "TOTAL ATTENDANCE"
    }
  ];
}
