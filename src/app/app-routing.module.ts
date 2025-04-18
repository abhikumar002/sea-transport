import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './component/pages/home/home.component';
import { AboutComponent } from './component/pages/about/about.component';
import { ServicesComponent } from './component/pages/services/services.component';
import { ContactComponent } from './component/pages/contact/contact.component';
import { OurTeamComponent } from './component/pages/our-team/our-team.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'our-team', component: OurTeamComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
