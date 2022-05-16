import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './componets/homepage/homepage.component';
import { AboutComponent } from './componets/about/about.component';
import { ProjectsComponent } from './componets/projects/projects.component';
import { ErrorPageComponent } from './componets/error-page/error-page.component';
import { ContactComponent } from './componets/contact/contact.component';
import { QualificationComponent } from './componets/qualification/qualification.component';
import { SkillsComponent } from './componets/skills/skills.component';
import { NavbarComponent } from './componets/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AboutComponent,
    ProjectsComponent,
    ErrorPageComponent,
    ContactComponent,
    QualificationComponent,
    SkillsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  title = 'Tour of Heroes';
}

