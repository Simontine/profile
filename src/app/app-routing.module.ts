import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './componets/homepage/homepage.component';
import { AboutComponent } from './componets/about/about.component';
import { ContactComponent } from './componets/contact/contact.component';
import { ProjectsComponent } from './componets/projects/projects.component';
import { ErrorPageComponent } from './componets/error-page/error-page.component';
import { SkillsComponent } from './componets/skills/skills.component';
import { NavbarComponent } from './componets/navbar/navbar.component';

const routes: Routes = [
  {path: '', redirectTo:'home',pathMatch:'full'},
  {path: 'home', component: HomepageComponent},
  // {path: 'skills', component: SkillsComponent},
  // {path: 'about', component: AboutComponent},
  // {path: 'contact', component: ContactComponent},
  // {path: 'projects', component: ProjectsComponent},
  // {path: 'navbar', component: NavbarComponent},
  {path: '**', component: ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
