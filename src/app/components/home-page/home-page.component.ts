import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-home-page',
  imports: [MatButtonModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
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
