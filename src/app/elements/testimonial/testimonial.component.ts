import { Component, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-testimonial",
  templateUrl: "./testimonial.component.html",
  styleUrls: ["./testimonial.component.scss"]
})
export class TestimonialComponent implements OnInit {
  constructor(private modalService: NgbModal) {}

  ngOnInit() {}

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true, size: "lg" });
  }

  testimonialcarousel2 = [
    {
      img: "assets/images/event/testimonial/L3-1.png"
    },
    {
      img: "assets/images/event/testimonial/L3-1.png"
    }
  ];

  testimonialCarouselOptions2 = {
    items: 1,
    margin: 0,
    autoHeight: true,
    nav: true,
    dots: false,
    navText: [
      '<img src="assets/images/music/gallery/gallery-icon/left.png">',
      '<img src="assets/images/music/gallery/gallery-icon/right.png">'
    ],
    autoplay: false,
    slideSpeed: 300,
    paginationSpeed: 400,
    loop: true
  };
}
