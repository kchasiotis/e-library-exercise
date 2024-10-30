import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-text-carousel',
  templateUrl: './text-carousel.component.html',
  styleUrls: ['./text-carousel.component.scss'],
})
export class TextCarouselComponent implements OnInit {
  @Input({ required: true }) textArray!: string[];
  @Output('textClicked') textClicked = new EventEmitter();
  activeIndex: number = 0; // todo: add active index other

  constructor() {}

  ngOnInit() {
    this.textClicked.emit(this.textArray[this.activeIndex]);
  }

  textClickedHandler(index: number) {
    this.activeIndex = index;
    this.textClicked.emit(this.textArray[index]);
  }
}
