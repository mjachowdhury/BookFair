import { EventBlogComponent } from "./events/event-blog/event-blog.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { EventsComponent } from "./events/events.component";
//import { EventBlogComponent } from "./events/events.component";
const routes: Routes = [
  {
    path: "event",
    component: EventsComponent,
    data: {
      title: "Cork Book Fair | Ireland"
    }
  },
  {
    path: "event-blog",
    component: EventBlogComponent,
    data: {
      title: "Blog | Exihibition"
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutsRoutingModule {}
