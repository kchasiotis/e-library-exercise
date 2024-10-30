import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-carousel',
  templateUrl: './text-carousel.component.html',
  styleUrls: ['./text-carousel.component.scss'],
})
export class TextCarouselComponent {
  @Input({ required: true }) textArray = [
    'Luxe',
    'Countryside',
    'Islands',
    'Private rooms',
  ];
}
