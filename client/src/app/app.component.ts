import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';
import { City } from './models/city';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WeatherCardComponent } from './components/weather-card/weather-card.component';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [CommonModule, FormsModule, WeatherCardComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  cities: City[] = [];
  filteredCities: City[] = [];
  searchQuery: string = '';

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    // Fetch all cities on component initialization
    this.weatherService.getCitiesWeather().subscribe({
      next: (data) => {
        this.cities = data;
        this.filteredCities = [...this.cities];
      },
      error: (err) => console.error('Error fetching cities', err)
    });
  }

  // Filter cities based on the search query
  onSearchChange(): void {
    this.filteredCities = this.cities.filter(city =>
      city.city.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
}
