import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs'
import { ExperienceTabComponent } from "../subTabs/experience-tab/experience-tab.component";
import { TechTabComponent } from "../subTabs/tech-tab/tech-tab.component";
import { EducationTabComponent } from "../subTabs/education-tab/education-tab.component";
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-resume-page',
  imports: [MatTabsModule, 
            ExperienceTabComponent,
            TechTabComponent,
            EducationTabComponent,
            NavBarComponent
          ],
  templateUrl: './resume-page.component.html',
  styleUrl: './resume-page.component.scss',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-20px)' }),
        animate('300ms ease-in-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
  ],
})
export class ResumePageComponent {

}
