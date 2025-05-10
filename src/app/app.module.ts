import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/pages/home/home.component';
import { AboutComponent } from './component/pages/about/about.component';
import { ServicesComponent } from './component/pages/services/services.component';
import { ContactComponent } from './component/pages/contact/contact.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { MiddlewareComponent } from './component/middleware/middleware.component';
import { OurTeamComponent } from './component/pages/our-team/our-team.component';
import { FAQComponent } from './component/faq/faq.component';
import { TermsAndConditionsComponent } from './component/terms-and-conditions/terms-and-conditions.component';
import { PrivacypolicyComponent } from './component/privacypolicy/privacypolicy.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    ContactComponent,
    NavbarComponent,
    FooterComponent,
    MiddlewareComponent,
    OurTeamComponent,
    FAQComponent,
    TermsAndConditionsComponent,
    PrivacypolicyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
