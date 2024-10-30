import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  cardList = [
    { imageUri: '', title: '', subtitle: '', price: 40, stars: '' },
    { imageUri: '', title: '', subtitle: '', price: 40, stars: '' },
    { imageUri: '', title: '', subtitle: '', price: 40, stars: '' },
  ];

  // JavaScript to generate a random color and update the CSS variable
  getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}
