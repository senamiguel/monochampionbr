import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-reports',
  imports: [CommonModule],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.css'
})
export class ReportsComponent {
  selectedOption: string = '';
  onTypeSelected(event: any) {
    this.selectedOption = event.target.value;
  }
}
