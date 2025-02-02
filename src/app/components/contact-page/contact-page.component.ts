import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

@Component({
  selector: 'app-contact-page',
  imports: [NavBarComponent],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.scss'
})
export class ContactPageComponent {
  public email = "langley.conn@gmail.com";

  public openLinkedIn() : void {
    const url = "https://www.linkedin.com/in/connor-langley-uwl2020";
    window.open(url, '_blank');
  }

}
