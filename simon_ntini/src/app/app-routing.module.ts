import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './componets/homepage/homepage.component';
import { AboutComponent } from './componets/about/about.component';
import { ContactComponent } from './componets/contact/contact.component';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'Home', component: HomepageComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
