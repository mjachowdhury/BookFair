import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-event-blog",
  templateUrl: "./event-blog.component.html",
  styleUrls: ["./event-blog.component.scss"]
})
export class EventBlogComponent implements OnInit {
  constructor() { }

  ngOnInit() { }

  blogs = [
    {
      img: "assets/images/event/blog/1.jpg",
      date: "12 December 2019",
      type: "admin",
      title: "How to Start Book Blog.",
      //subTitle: "Detais This Event",
      description:
        "Ever finished reading an interesting book and wished you could discuss it with someone? Or read a great book that you're dying to recommend to everyone?"
    },
    {
      img: "assets/images/event/blog/2.jpg",
      date: "20 December 2019",
      type: "admin",
      title: "Novels That Shaped Our World.",
      //subTitle: "Detais This Event",
      description:
        "The campaign kicks off a host of other events and programmes celebrating books throughout 2020 and will no doubt provoke lots of debate."
    },
    {
      img: "assets/images/event/blog/3.jpg",
      date: "5 September 2019",
      type: "admin",
      title: "Find Great Speaker For Event.",
      subTitle: "Detais This Event",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard ."
    }
  ];

  blogCarouselOptions = {
    items: 3,
    margin: 60,
    nav: false,
    dots: false,
    autoplay: false,
    slideSpeed: 300,
    paginationSpeed: 400,
    loop: true,
    responsive: {
      0: {
        items: 1,
        margin: 10
      },
      991: {
        items: 2,
        margin: 10
      },
      1200: {
        items: 3,
        margin: 30
      }
    }
  };
}
