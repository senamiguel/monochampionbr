import { Component } from '@angular/core';
import { TopComponent } from '../top/top.component';
import { RiotApiService } from '../../services/riotapi.service';

@Component({
  selector: 'app-home',
  imports: [TopComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  puuid: string = '';
  nick: string = '';
  tag: string = '';
  tier: any;
  profileIconId: any;
  rank: any;
  leaguePoints: any;
  constructor(private riotApiService: RiotApiService) {}
  
}
