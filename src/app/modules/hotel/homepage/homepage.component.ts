import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent {
  categories: string[] = [
    'Luxe',
    'Countryside',
    'Islands',
    'Private rooms',
    'Savana',
  ];

  textClickedHandler(text: string) {
    console.log(text);
  }
}
