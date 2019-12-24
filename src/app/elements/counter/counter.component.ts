import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-counter",
  templateUrl: "./counter.component.html",
  styleUrls: ["./counter.component.scss"]
})
export class CounterComponent implements OnInit {
  constructor() { }

  ngOnInit() { }


  counter4 = [
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
