import { NgIf,NgFor,NgSwitch, NgSwitchCase} from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ArrayService } from '../../services/array.service';
import { ProfileComponent } from '../profile/profile.component';
import { CommentComponent } from '../profile/comment/comment.component';
import { AccountsComponent } from "../profile/accounts/accounts.component";
 
@Component({
  selector: 'app-create-profile',
  imports: [NgIf, NgSwitch, NgSwitchCase, NgFor, ProfileComponent, CommentComponent, AccountsComponent],
  templateUrl: './create-profile.component.html',
  styleUrl: './create-profile.component.css',
})
export class CreateProfileComponent {
  profileForm: FormGroup;
  currentPage: number = 3;
  bioText: string = '';
  username: string = '';
  selectedIconURL: string = '';
  selectediconIndex: number = 0;
  iconBaseURL: string = 'https://ddragon-webp.lolmath.net/latest/img/profileicon/';
  selectedChampionIndex: number = 0;
  selectedChampionName: string = '';
  availableChampionNames: string[];
  championIconMap: Map<string, string[]>;
 
  constructor(
    private formBuilder: FormBuilder,
    @Inject(ArrayService) private arrayService: ArrayService
  ) {
 
    this.profileForm = this.formBuilder.group({
      champions: [''],
    });
 
    this.availableChampionNames = this.arrayService.champion_names;
    this.championIconMap = this.arrayService.champion_icons;
  }
 
  get championsControl() {
    return this.profileForm.get('champions');
  }
 
  saveProfileDetails(value: string, fieldType: 'bio' | 'username'): void {
    if (fieldType === 'bio') {
      this.bioText = value;
    } else if (fieldType === 'username') {
      this.username = value;
    }
  }
 
  onChampionSelect(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const selectedChampion = selectElement.value;
    const selectedIndex = selectElement.selectedIndex;
    this.selectedChampionIndex = selectedIndex;
 
    const championIcons = this.championIconMap.get(selectedChampion);
 
    if (championIcons && selectedIndex >= 0) {
      this.selectedChampionName = selectedChampion;
    } else {
      this.selectedIconURL = '';
    }
  }
 
  generateIconURLForChampion(championName: string, iconIndex: number): string {
    const championIcons = this.championIconMap.get(championName);
 
    if (championIcons && iconIndex >= 0 && iconIndex < championIcons.length) {
      return `${this.iconBaseURL}${championIcons[iconIndex]}.webp`;
    }
    return '';
  }
 
  autoResizeTextarea(event: any): void {
    event.target.style.height = 'auto';
    event.target.style.height = `${event.target.scrollHeight}px`;
  }
 
  togglePage(page:number): void {
    this.currentPage = page;
  }
 
  toggleIconSelection(iconIndex: number): void {
    const icons = document.querySelectorAll('[id^="icon"]');
    const championIcons = this.championIconMap.get(this.selectedChampionName);
 
    icons.forEach((icon, index) => {
      if (index !== iconIndex) {
        icon.classList.remove('selected');
      }
    });
    const selectedIcon = document.getElementById(`icon${iconIndex}`);
    if (selectedIcon && !selectedIcon.classList.contains('selected')) {
      selectedIcon.classList.add('selected');
      this.selectedIconURL = `${this.iconBaseURL + championIcons![iconIndex]}.webp`;
    }
  }
}