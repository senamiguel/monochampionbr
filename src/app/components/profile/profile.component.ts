import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {
  autoResize($event: any): void {
    $event.target.style = 'height: auto';
    $event.target.style = 'height:' + $event.target.scrollHeight + 'px';
  }
}
