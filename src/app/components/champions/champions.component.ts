import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArrayService } from '../../services/array.service';

@Component({
  selector: 'app-champions',
  imports: [CommonModule],
  templateUrl: './champions.component.html',
  styleUrl: './champions.component.css',
})
export class ChampionsComponent {
  url: string =
    'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/';
  
    champion_names: string[] = [];
    champion_ids: string[] = [];

    constructor(private arrayService: ArrayService) {
      this.champion_names = this.arrayService.champion_names;
      this.champion_ids = this.arrayService.champion_ids;
    }
}
