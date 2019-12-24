//import { AuthModule } from "./auth/auth.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { RouterModule, Routes, PreloadAllModules } from "@angular/router";
import { routes } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { LayoutsModule } from "./layouts/layouts.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { ElementsModule } from "./elements/elements.module";

import { HttpClientModule } from "@angular/common/http";
import { CarouselModule } from "ngx-owl-carousel-o";
import { ScrollToModule } from "ng2-scroll-to-el";
import { SharedModule } from "./shared/shared.module";

/* import { FormioAppConfig } from "angular-formio";
import { FormioAuthService, FormioAuthConfig } from "angular-formio/auth";
import { AuthConfig, AppConfig } from "../config";
import { AuthModule } from "./auth/auth.module"; */

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: "serverApp" }),
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutsModule,
    ElementsModule,
    HttpClientModule,
    CarouselModule,
    ScrollToModule,
    SharedModule,
    RouterModule.forRoot(routes, {
      useHash: false,
      anchorScrolling: "enabled",
      scrollPositionRestoration: "enabled"

      /* path: "auth",
      loadChildren: () => AuthModule */
    })
  ],
  providers: [
    /* FormioAuthService,
    { provide: FormioAuthConfig, useValue: AuthConfig },
    { provide: FormioAppConfig, useValue: AppConfig } */
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
