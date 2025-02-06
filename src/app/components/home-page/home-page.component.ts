import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-home-page',
  imports: [MatButtonModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-20px)' }),
        animate('300ms ease-in-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
  ],
})
export class HomePageComponent {
  public name = "Connor Langley";
  public title = "Software Engineer";
  

  constructor(private _router: Router){

  }

  public routeTo(route : string) : void{
    this._router.navigate([route]);
  }

  public openGitHub() : void {
    let url : string = "https://github.com/langleyCon/projects";
    window.open(url, "_blank"); 
  }
}
