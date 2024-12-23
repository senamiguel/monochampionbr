import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {
  @Input() bio!: string;
  @Input() nick!: string;
  @Input() icon!: string;
  @Input() campeao!: string;

}
