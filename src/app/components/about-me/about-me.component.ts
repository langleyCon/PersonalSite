import { Component, OnInit, signal} from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-about-me',
  imports: [NavBarComponent],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-20px)' }),
        animate('300ms ease-in-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
  ],
})

export class AboutMeComponent implements OnInit{

  private currentIndex = signal(0);
  private images : string[] = ['Lady', 'Cats', 'boarding'];

  public currentPhoto = signal(this.images[this.currentIndex()]);

  ngOnInit(): void {
    this.startSlideShow();
  }

  private startSlideShow(): void {
    setInterval(() => {
      this.nextPhoto();
    }, 5000);
  }

  private nextPhoto() : void {
    this.currentIndex.update(idx => idx == this.images.length - 1 ? 0 : idx + 1);
    this.currentPhoto.update(photo => photo = this.images[this.currentIndex()]);
  }


}
