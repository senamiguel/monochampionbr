import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MonoApiService {
  constructor(private http: HttpClient) { }
  getAccountDataByNick(nick:string): Observable<any> {
    const account = `https://localhost:7278/api/Pony/by-nick/${nick}`;
    return this.http.get<any>(account);
  }
  getAccountDataById(id:number): Observable<any> {
    const account = `https://localhost:7278/api/Pony/${id}`;
    return this.http.get<any>(account);
  }
  postCreateProfile(data: any): Observable<any> {
    const account = `https://localhost:7278/api/Pony`;
    return this.http.post<any>(account, data);
  }
  getComments(mono:number): Observable<any> {
    const comment = `https://localhost:7278/api/Comment/mono/${mono}`;
    return this.http.get<any>(comment);
  }
  postCreateComment(data: any): Observable<any> {
    const account = `https://localhost:7278/api/Comment`;
    return this.http.post<any>(account, data);
  }
}