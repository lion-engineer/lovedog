import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import{BaseRoutingModule} from 'src/app/routing/base/base-routing.module'

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SharedlayoutComponent } from './_shared/sharedlayout/sharedlayout.component';
import { FooterComponent } from './footer/footer.component';
import { AdoptionComponent } from './modules/adoption/adoption.component';
import { HostpitalComponent } from './modules/hostpital/hostpital.component';
import { LostComponent } from './modules/lost/lost.component';
import { HomeComponent } from './modules/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SharedlayoutComponent,
    FooterComponent,
    AdoptionComponent,
    HostpitalComponent,
    LostComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BaseRoutingModule,
    AppRoutingModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]  
})
export class AppModule {   
}
