import { Component } from '@angular/core';
import { cardList } from 'src/app/shared/components/card/card.mock';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent {
  cardList = cardList;
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
