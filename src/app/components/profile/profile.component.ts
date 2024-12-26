import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MonoApiService } from '../../services/monoapi.service';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent implements OnInit {
  constructor(private router: ActivatedRoute, private mono: MonoApiService) {}
  @Input() bio!: string;
  @Input() nick!: string;
  @Input() icon!: string;
  @Input() campeao!: string;
  elo:string = 'Mestre';
  pdl:number = 1;
  iconBaseURL: string = 'https://ddragon-webp.lolmath.net/latest/img/profileicon/';
  ngOnInit(): void {
    this.nick = this.router.snapshot.paramMap.get('nick') ?? this.nick;
    this.mono.getAccountData(this.nick).subscribe((data) => {
      console.log(data);
      if (data) {
        this.bio = data.bio;
        this.icon = this.iconBaseURL + data.iconID + '.webp';
        this.campeao = data.champion;
        this.elo = data.elo;
        this.pdl = data.pdl;
      }
    });
  }
}
