import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MonoApiService } from '../../services/monoapi.service';
import { CommonModule } from '@angular/common';
import { CommentComponent } from "./comment/comment.component";

@Component({
  selector: 'app-profile',
  imports: [CommonModule, CommentComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent implements OnInit {
  constructor(private router: ActivatedRoute, private mono: MonoApiService) {}
  @Input() bio!: string;
  @Input() nick!: string;
  @Input() icon!: string;
  @Input() campeao!: string;
  id:number = 0;
  elo: string = 'Mestre';
  pdl: number = 1;
  karma: number = 0;
  colorup: string = '#444444';
  colordown: string = '#444444';
  baseColorUp: string = '#444444';
  baseColorDown: string = '#444444';
  votes: Array<number> = [0, 0];
  iconBaseURL: string =
    'https://ddragon-webp.lolmath.net/latest/img/profileicon/';
  ngOnInit(): void {
    this.nick = this.router.snapshot.paramMap.get('nick') ?? this.nick;
    this.mono.getAccountDataByNick(this.nick).subscribe((data) => {
      if (data) {
        this.bio = data.bio;
        this.icon = this.iconBaseURL + data.iconID + '.webp';
        this.campeao = data.champion;
        this.elo = data.elo;
        this.id = data.id;
        this.pdl = data.pdl;
        this.karma = data.karma;
      }
    });
  }
  changeColor(icon: string) {
    if (icon === 'upvote') {
      this.colorup = '#ff0000';
      return;
    }
    this.colordown = '#3e3ece';
  }
  resetColor(icon: string) {
    this.colorup = this.baseColorUp;
    this.colordown = this.baseColorDown;
  }
  vote(icon: string) {
    if (icon === 'upvote') {
      if (this.votes[0] === 1) {
        this.karma -= 1;
        this.votes[0] = 0;
        this.baseColorUp = '#444444';
      } else {
        if (this.votes[1] === 1) {
          this.karma += 1;
          this.votes[1] = 0;
          this.baseColorDown = '#444444';
        }
        this.karma += 1;
        this.votes[0] = 1;
        this.baseColorUp = '#ff0000';
      }
    } else if (icon === 'downvote') {
      if (this.votes[1] === 1) {
        this.karma += 1;
        this.votes[1] = 0;
        this.baseColorDown = '#444444';
      } else {
        if (this.votes[0] === 1) {
          this.karma -= 1;
          this.votes[0] = 0;
          this.baseColorUp = '#444444';
        }
        this.karma -= 1;
        this.votes[1] = 1;
        this.baseColorDown = '#3e3ece';
      }
    }
  }
}
