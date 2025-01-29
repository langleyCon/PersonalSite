import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs'
import { ExperienceTabComponent } from "../subTabs/experience-tab/experience-tab.component";
import { TechTabComponent } from "../subTabs/tech-tab/tech-tab.component";
import { EducationTabComponent } from "../subTabs/education-tab/education-tab.component";

@Component({
  selector: 'app-resume-page',
  imports: [MatTabsModule, ExperienceTabComponent, TechTabComponent, EducationTabComponent],
  templateUrl: './resume-page.component.html',
  styleUrl: './resume-page.component.scss'
})
export class ResumePageComponent {

}
