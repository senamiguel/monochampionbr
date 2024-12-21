import { Routes } from '@angular/router';
import { ChampionsComponent } from './components/champions/champions.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'champions', component: ChampionsComponent },
    { path: 'profile', component: ProfileComponent }
];
