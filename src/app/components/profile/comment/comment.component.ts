import { Component } from '@angular/core';

@Component({
  selector: 'app-comment',
  imports: [],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.css'
})
export class CommentComponent {
  autoResize($event: any): void {
    $event.target.style = 'height: auto';
    $event.target.style = 'height:' + $event.target.scrollHeight + 'px';
  }
}
