import { Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ResumePageComponent } from './components/resume-page/resume-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { AboutMeComponent } from './components/about-me/about-me.component';

export const routes: Routes = [
    {path: '', component: HomePageComponent},
    {path: 'resume', component: ResumePageComponent},
    {path: 'contact', component: ContactPageComponent},
    {path: 'about', component: AboutMeComponent}
];
