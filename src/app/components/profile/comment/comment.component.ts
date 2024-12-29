import { Component, Inject, Input } from '@angular/core';
import { MonoApiService } from '../../../services/monoapi.service';

@Component({
  selector: 'app-comment',
  imports: [],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.css'
})
export class CommentComponent {
  @Input() monoid!: number;
  comments: Array<any> = [];
  message:string = '';
  autorId:number = 0;
  autorNick:string = '';
  autorIcon:string = '';
  messageDate:Date = new Date();
  nicks: Array<string> = [];
  iconBaseURL: string =
  'https://ddragon-webp.lolmath.net/latest/img/profileicon/';
  constructor(private mono: MonoApiService) {}
  ngOnInit(): void {
    this.getComments();

  }
  autoResize($event: any): void {
    $event.target.style = 'height: auto';
    $event.target.style = 'height:' + $event.target.scrollHeight + 'px';
  }
  getComments(): void {
    this.mono.getComments(this.monoid).subscribe((data) => {
      this.comments = data;
    });
  }
  getAuthor(): void {
    this.mono.getAccountDataById(this.autorId).subscribe((data) => {
      if (data) {
        this.nicks = data.nick;
        this.autorIcon = this.iconBaseURL + data.iconID + '.webp';
      }
    });
  }
}
