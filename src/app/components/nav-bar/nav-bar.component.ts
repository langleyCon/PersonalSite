import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  imports: [MatButtonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  constructor(private _router: Router){}

  public routeTo(route : string){
    this._router.navigate([route]);
  }

  public openGitHub(){
    const url = "https://github.com/langleyCon/projects"
    window.open(url, '_blank')
  }

}
