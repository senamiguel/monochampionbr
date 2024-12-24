import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RiotApiService {
  private apiKey: string = "";
  private region: string = 'AMERICAS';
  private region1: string = 'br1';

  constructor(private http: HttpClient) { }

  getAccountData(gameName: string, tagLine: string): Observable<any> {
    const accountUrl = `https://${this.region}.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${gameName}/${tagLine}`;
    const headers = new HttpHeaders()
      .set('X-Riot-Token', this.apiKey);
    return this.http.get<any>(accountUrl, { headers });
  }

  getSummonerData(puuid: string): Observable<any> {
    const summonerUrl = `https://${this.region1}.api.riotgames.com/lol/summoner/v4/summoners/by-puuid/${puuid}`;
    const headers = new HttpHeaders()
    .set('X-Riot-Token', this.apiKey)
    .set('Access-Control-Allow-Origin', '*');
    return this.http.get<any>(summonerUrl, { headers });
  }

  getLeagueData(summonerId: string): Observable<any> {
    const leagueUrl = `https://${this.region1}.api.riotgames.com/lol/league/v4/entries/by-summoner/${summonerId}`;
    const headers = new HttpHeaders()
    .set('X-Riot-Token', this.apiKey)
    .set('Access-Control-Allow-Origin', '*');
    return this.http.get<any>(leagueUrl, { headers });
  }
}