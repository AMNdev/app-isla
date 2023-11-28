import { Component, Input } from '@angular/core';
import { OptionsMenu } from '../../interfaces/optionsMenu.interface';

@Component({
  selector: 'shared-menu-card',
  templateUrl: './menu-card.component.html',
  styleUrls: ['./menu-card.component.css'],
})
export class MenuCardComponent {
  @Input()
  feature?: OptionsMenu;
}
