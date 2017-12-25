import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { ServicesComponent } from './services/services.component';
import { CareersComponent } from './careers/careers.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path : 'home', component: HomeComponent}, 
  {path : 'about', component: AboutComponent},
  {path : 'solutions', component: SolutionsComponent},
  {path : 'services', component: ServicesComponent},
  {path : 'careers', component: CareersComponent}, 
  {path : 'contact', component: ContactComponent} 
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    SolutionsComponent,
    ServicesComponent,
    CareersComponent,
    ContactComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
