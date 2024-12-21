import { Component, OnInit } from '@angular/core';
import { City } from '../../models/city';
import { WeatherService } from '../../weather.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WeatherCardComponent } from '../weather-card/weather-card.component';

@Component({
  selector: 'app-home',
  standalone:true,
  imports: [CommonModule, FormsModule, WeatherCardComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cities: City[] = [];
  filteredCities: City[] = [];
  searchQuery: string = '';

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    // display all cities
    this.weatherService.getCitiesWeather().subscribe({
      next: (data) => {
        this.cities = data;
        this.filteredCities = [...this.cities];
      },
      error: (err) => console.error('Error fetching cities', err)
    });
  }

  // search on cities based on the search query
  onSearchChange(): void {
    this.filteredCities = this.cities.filter(city =>
      city.city.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
}
