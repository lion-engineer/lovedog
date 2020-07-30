import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { BaseRoutingModule } from 'src/app/routing/base/base-routing.module'

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SharedlayoutComponent } from './_shared/sharedlayout/sharedlayout.component';
import { FooterComponent } from './footer/footer.component';
import { AdoptionComponent } from './modules/adoption/adoption.component';
import { HostpitalComponent } from './modules/hostpital/hostpital.component';
import { LostComponent } from './modules/lost/lost.component';
import { HomeComponent } from './modules/home/home.component';
import { OwlcarouselDirective } from './directive/owlcarousel.directive';
import { BannerComponent } from './modules/banner/banner.component';
import { SterilizationPipe, BodyTypePipe, BacterinPipe, Sex } from './pipe/adopt/sterilization.pipe';
import { ApiInterceptor } from './service/utility.service'
import { OwlModule } from 'ngx-owl-carousel';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SharedlayoutComponent,
    FooterComponent,
    AdoptionComponent,
    HostpitalComponent,
    LostComponent,
    HomeComponent,
    OwlcarouselDirective,
    BannerComponent,
    SterilizationPipe,
    BodyTypePipe,
    BacterinPipe,
    Sex
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BaseRoutingModule,
    AppRoutingModule,
    FontAwesomeModule,
    OwlModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
