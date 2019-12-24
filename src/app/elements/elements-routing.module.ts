import { LoginComponent } from "./login/login.component";
import { EventBlogComponent } from "./../layouts/events/event-blog/event-blog.component";
import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AlertsComponent } from "./alerts/alerts.component";
import { AccordionComponent } from "./accordion/accordion.component";
import { BoxshadowComponent } from "./boxshadow/boxshadow.component";
import { ButtonComponent } from "./button/button.component";
import { ContactComponent } from "./contact/contact.component";
import { EventScheduleComponent } from "./event-schedule/event-schedule.component";
import { GalleryComponent } from "./gallery/gallery.component";
import { PricingComponent } from "./pricing/pricing.component";
import { CounterComponent } from "./counter/counter.component";
import { CountDownComponent } from "./count-down/count-down.component";
import { ProgressBarComponent } from "./progress-bar/progress-bar.component";
import { TestimonialComponent } from "./testimonial/testimonial.component";
import { VideoComponent } from "./video/video.component";
import { ServiceComponent } from "./service/service.component";
import { SubscribeComponent } from "./subscribe/subscribe.component";

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "accordion",
        component: AccordionComponent,
        data: {
          title: "ELEMENTS WITH accordion",
          breadcrumb: "Accordion"
        }
      },

      {
        path: "contact",
        component: ContactComponent,
        data: {
          title: "ELEMENTS WITH contact",
          breadcrumb: "Contact"
        }
      },
      {
        path: "event-schedule",
        component: EventScheduleComponent,
        data: {
          title: "ELEMENTS WITH Event-schedule",
          breadcrumb: "Event-schedule"
        }
      },
      {
        path: "gallery",
        component: GalleryComponent,
        data: {
          title: "ELEMENTS WITH Gallery",
          breadcrumb: "Gallery"
        }
      },
      {
        path: "pricing",
        component: PricingComponent,
        data: {
          title: "ELEMENTS WITH pricing",
          breadcrumb: "Pricing"
        }
      },
      {
        path: "counter",
        component: CounterComponent,
        data: {
          title: "ELEMENTS WITH counter",
          breadcrumb: "Counter"
        }
      },
      {
        path: "count-down",
        component: CountDownComponent,
        data: {
          title: "ELEMENTS WITH count-down",
          breadcrumb: "Count-down"
        }
      },

      {
        path: "testimonial",
        component: TestimonialComponent,
        data: {
          title: "ELEMENTS WITH testimonial",
          breadcrumb: "Testimonial"
        }
      },

      {
        path: "subscribe",
        component: SubscribeComponent,
        data: {
          title: "ELEMENTS WITH subscribe",
          breadcrumb: "Subscribe"
        }
      },

      {
        path: "login",
        component: LoginComponent,
        data: {
          title: "ELEMENTS WITH login",
          breadcrumb: "Login"
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElementsRoutingModule {}
