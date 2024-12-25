import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent implements OnInit {
  constructor(private router: ActivatedRoute) {}
  @Input() bio!: string;
  @Input() nick!: string;
  @Input() icon!: string;
  @Input() campeao!: string;

  ngOnInit(): void {
    this.nick = this.router.snapshot.paramMap.get('nick') ?? this.nick;
  }
}
