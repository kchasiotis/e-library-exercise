import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent {
  @Input({ required: true }) iconName!:
    | 'search'
    | 'date'
    | 'add_person'
    | 'right_arrow'
    | 'star'
    | 'person'
    | 'heart'
    | 'message'
    | 'home';
}
