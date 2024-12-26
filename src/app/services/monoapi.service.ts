import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MonoApiService {
  constructor(private http: HttpClient) { }
  getAccountData(nick:string): Observable<any> {
    const account = `https://localhost:7278/api/Pony/by-nick/${nick}`;
    console.log(this.http.get<any>(account));
    return this.http.get<any>(account);
  }
  postCreateProfile(data: any): Observable<any> {
    const account = `https://localhost:7278/api/Pony`;
    return this.http.post<any>(account, data);
  }
}