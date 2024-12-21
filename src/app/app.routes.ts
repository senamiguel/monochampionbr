import { Routes } from '@angular/router';
import { ChampionsComponent } from './components/champions/champions.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'champions', component: ChampionsComponent }
];
