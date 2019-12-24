import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LayoutsRoutingModule } from "./layouts-routing.module";
import { CarouselModule } from "ngx-owl-carousel-o";
import { SwiperModule } from "ngx-swiper-wrapper";
import { SWIPER_CONFIG } from "ngx-swiper-wrapper";
import { SwiperConfigInterface } from "ngx-swiper-wrapper";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { SharedModule } from "../shared/shared.module";
import { CountToModule } from "angular-count-to";
import { GalleryModule } from "@ks89/angular-modal-gallery";
import { AngularTiltModule } from "angular-tilt";
import "hammerjs";
import "mousetrap";
import { ScrollToModule } from "ng2-scroll-to-el";
import { MasonryGalleryModule } from "ngx-masonry-gallery";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgxPayPalModule } from "ngx-paypal";
import { Ng5SliderModule } from "ng5-slider";
import { NgxMasonryModule } from 'ngx-masonry';

//Event Layout
import { EventsComponent } from "./events/events.component";
import { EventNavComponent } from "./events/event-nav/event-nav.component";
import { EventHeaderComponent } from "./events/event-header/event-header.component";
import { EventBookingComponent } from "./events/event-booking/event-booking.component";
import { EventAboutComponent } from "./events/event-about/event-about.component";
import { EventSpeakerComponent } from "./events/event-speaker/event-speaker.component";
import { EventSponsorComponent } from "./events/event-sponsor/event-sponsor.component";
import { EventScheduleComponent } from "./events/event-schedule/event-schedule.component";
import { EventTestimonialComponent } from "./events/event-testimonial/event-testimonial.component";
import { EventGalleryComponent } from "./events/event-gallery/event-gallery.component";
import { EventCounterComponent } from "./events/event-counter/event-counter.component";
import { EventSubscribeComponent } from "./events/event-subscribe/event-subscribe.component";
import { EventPricingComponent } from "./events/event-pricing/event-pricing.component";
import { EventBlogComponent } from "./events/event-blog/event-blog.component";
import { EventContactComponent } from "./events/event-contact/event-contact.component";
import { EventCopyrightComponent } from "./events/event-copyright/event-copyright.component";

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {};

@NgModule({
  declarations: [
    EventsComponent,
    EventNavComponent,
    EventHeaderComponent,
    EventBookingComponent,
    EventAboutComponent,
    EventSpeakerComponent,
    EventSponsorComponent,
    EventScheduleComponent,
    EventTestimonialComponent,
    EventGalleryComponent,
    EventCounterComponent,
    EventSubscribeComponent,
    EventPricingComponent,
    EventBlogComponent,
    EventContactComponent,
    EventCopyrightComponent
  ],

  imports: [
    CommonModule,
    LayoutsRoutingModule,
    SwiperModule,
    CarouselModule,
    NgbModule,
    GalleryModule.forRoot(),
    SharedModule,
    CountToModule,
    AngularTiltModule,
    ScrollToModule.forRoot(),
    MasonryGalleryModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPayPalModule,
    Ng5SliderModule,
    NgxMasonryModule
  ],

  exports: [

  ],

  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ]
})
export class LayoutsModule { }
