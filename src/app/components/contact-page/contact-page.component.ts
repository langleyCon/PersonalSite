import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-contact-page',
  imports: [NavBarComponent],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.scss',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-20px)' }),
        animate('300ms ease-in-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
  ],
})
export class ContactPageComponent {
  public email = "langley.conn@gmail.com";

  public openLinkedIn() : void {
    const url = "https://www.linkedin.com/in/connor-langley-uwl2020";
    window.open(url, '_blank');
  }

}
