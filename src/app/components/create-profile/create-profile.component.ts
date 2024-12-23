import { NgIf } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { NgFor } from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ArrayService } from '../../services/array.service';
import { ProfileComponent } from '../profile/profile.component';
import { CommentComponent } from '../profile/comment/comment.component';

@Component({
  selector: 'app-create-profile',
  imports: [NgIf, NgFor, ProfileComponent, CommentComponent],
  templateUrl: './create-profile.component.html',
  styleUrl: './create-profile.component.css',
})
export class CreateProfileComponent {
  form: FormGroup;
  page: number = 1;
  bio: string = '';
  nick: string = '';
  icon: string = '';
  selectedIndex: number = 0;
  selectedChampion: string = '';
  selectedIconURL: string = '';
  champion_names: string[];
  champion_icons: Map<string, string[]>;

  onSubmit() {}
  constructor(
    private fb: FormBuilder,
    @Inject(ArrayService) private arrayService: ArrayService
  ) {
    this.form = this.fb.group({
      champions: [''],
    });
    this.champion_names = this.arrayService.champion_names;
    this.champion_icons = this.arrayService.champion_icons;
  }

  get champions() {
    return this.form.get('champions');
  }
  saveProfileDetail(value: string, type: 'bio' | 'nick'): void {
    if (type === 'bio') {
      this.bio = value;
    } else if (type === 'nick') {
      this.nick = value;
    }
  }
  onChampionChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const selectedChampion = selectElement.value;
    const selectedIndex = selectElement.selectedIndex;
    this.selectedIndex = selectedIndex;

    const baseUrl = 'https://ddragon-webp.lolmath.net/latest/img/profileicon/';
    const championIcons = this.champion_icons.get(selectedChampion);

    if (championIcons && selectedIndex >= 0) {
      this.selectedIconURL = `${baseUrl}${championIcons[selectedIndex]}.webp`;
      this.selectedChampion = selectedChampion;
    } else {
      this.selectedIconURL = '';
    }
  }
  generateIconURL(champion: string, iconIndex: number): string {
    const baseUrl = 'https://ddragon-webp.lolmath.net/latest/img/profileicon/';
    const championIcons = this.champion_icons.get(champion);

    if (championIcons && iconIndex >= 0 && iconIndex < championIcons.length) {
      this.icon = `${baseUrl}${championIcons[iconIndex]}.webp`;
      return `${baseUrl}${championIcons[iconIndex]}.webp`;
    }

    return '';
  }
  autoResize($event: any): void {
    $event.target.style = 'height: auto';
    $event.target.style = 'height:' + $event.target.scrollHeight + 'px';
  }
  switchPage(): void {
    if (this.page == 1) {
      this.page = 2;
    } else {
      this.page = 1;
    }
  }
  selectIcon(index: number): void {
    const icons = document.querySelectorAll('[id^="icon"]');
    icons.forEach((icon, i) => {
      if (i !== index) {
        icon.classList.remove('selected');
      }
    });
    let icon = document.getElementById('icon' + index);
    if (!icon?.classList.contains('selected')) {
      icon?.classList.add('selected');
    }
  }
}
