import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

// Menu
export interface Menu {
  path?: string;
  title?: string;
  type?: string;
  icon?: string;
  badgeType?: string;
  badgeValue?: string;
  active?: boolean;
  megaMenu?: boolean;
  megaMenuType?: string; // small, medium, large
  bookmark?: boolean;
  children?: Menu[];
}

@Injectable({
  providedIn: "root"
})
export class NavService {
  constructor() {}

  MENUITEMS: Menu[] = [
    {
      title: "Home",
      path: "/event",
      type: "link"
    },

    {
      path: "/elements/event-schedule",
      title: "Event-Schedule",
      type: "link",
      icon: "list"
    },

    {
      path: "/elements/subscribe",
      title: "Subscribe",
      type: "link",
      icon: "share-alt"
    },

    {
      path: "/elements/pricing",
      title: "Pricing",
      type: "link",
      icon: "headphone"
    },

    {
      title: "Contact",
      path: "/elements/contact",
      type: "link",
      icon: "map-alt"
    },

    {
      title: "Event",
      megaMenu: true,
      megaMenuType: "small",
      type: "sub",
      children: [
        {
          title: "Event Details",
          type: "sub",
          children: [
            {
              path: "/elements/event-schedule",
              title: "Event-Schedule",
              type: "link",
              icon: "list"
            },

            {
              path: "/elements/counter",
              title: "Counter",
              type: "link",
              icon: "time"
            },
            {
              path: "/elements/subscribe",
              title: "Subscribe",
              type: "link",
              icon: "share-alt"
            }
          ]
        },
        {
          title: "Event Details",
          type: "sub",
          children: [
            {
              path: "/elements/gallery",
              title: "Gallery",
              type: "link",
              icon: "gallery"
            },
            {
              path: "/elements/pricing",
              title: "Pricing",
              type: "link",
              icon: "money"
            },

            {
              path: "/elements/count-down",
              title: "Countdown",
              type: "link",
              icon: "alarm-clock"
            }
          ]
        },
        {
          title: "Event Details",
          type: "sub",
          children: [
            {
              path: "/elements/accordion",
              title: "FAQ",
              type: "link",
              icon: "layout-accordion-merged"
            },

            {
              path: "/elements/testimonial",
              title: "Testimonial",
              type: "link",
              icon: "thought"
            },
            {
              path: "/elements/contact",
              title: "Contact",
              type: "link",
              icon: "map-alt"
            }
          ]
        }
      ]
    },

    {
      title: "Login",
      path: "/elements/login",
      type: "link",
      icon: "map-alt"
    }
  ];

  // Array
  items = new BehaviorSubject<Menu[]>(this.MENUITEMS);
}
