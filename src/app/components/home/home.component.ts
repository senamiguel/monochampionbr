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
  savedata(value: string, fieldType: 'nick' | 'tag'): void {
    if (fieldType === 'nick') {
      this.nick = value;
    } else if (fieldType === 'tag') {
      this.tag = value;
    }
  }
  data(){
    this.riotApiService.getAccountData(this.nick, this.tag).subscribe(accountData => {
      this.puuid = accountData.body.puuid;
      this.riotApiService.getSummonerData(this.puuid).subscribe(summonerData => {
        this.profileIconId = summonerData.body.profileIconId;
        const summonerId = summonerData.body.id;

        this.riotApiService.getLeagueData(summonerId).subscribe(leagueData => {
          for (let entry of leagueData.body) {
            if (entry.queueType === 'RANKED_SOLO_5x5') {
              this.tier = entry.tier;
              this.rank = entry.rank;
              this.leaguePoints = entry.leaguePoints;
              break;
            }
          }
        });
      });
    });
  }
}
