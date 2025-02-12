import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  imports: [MatButtonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent implements OnInit{
  public currentRoute: string = "no route";
  
  constructor(private _router: Router, private _activeRoute: ActivatedRoute){}
  
  
  ngOnInit(): void {
     this.currentRoute = this._activeRoute.snapshot.url.map(segment => segment.path).join('/');  
  }

  public routeTo(route : string){
    this._router.navigate([route]);
  }

  public openGitHub(){
    const url = "https://github.com/langleyCon/personalSite"
    window.open(url, '_blank')
  }

}
