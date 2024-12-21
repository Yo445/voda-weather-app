import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { WeatherDetailsComponent } from './components/weather-details/weather-details.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'weather-details/:id', component: WeatherDetailsComponent } // New route
];
