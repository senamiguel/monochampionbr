import { Routes } from '@angular/router';
import { ChampionsComponent } from './components/champions/champions.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CreateProfileComponent } from './components/create-profile/create-profile.component';
import { ReportsComponent } from './components/reports/reports.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'champions', component: ChampionsComponent },
  { path: 'profile/:nick', component: ProfileComponent },
  { path: 'create-profile', component: CreateProfileComponent },
  { path: 'report', component: ReportsComponent },
];
