import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from './../../weather.service';
import { City } from '../../models/city';
import { LoaderComponent } from '../loader/loader.component';

@Component({
  selector: 'app-weather-details',
  standalone: true,
  imports:[LoaderComponent],
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.css']
})

export class WeatherDetailsComponent implements OnInit {
  cityId!: number;
  cityData?: City;
  isLoading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private weatherService: WeatherService
  ) {}

  ngOnInit(): void {
    // Get city ID from the route parameters
    this.cityId = Number(this.route.snapshot.paramMap.get('id'));
    this.fetchCityWeatherDetails();
  }

  fetchCityWeatherDetails(): void {
    this.weatherService.getCityWeather(this.cityId).subscribe({
      next: (data) => {
        this.cityData = data;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error fetching city weather details:', error);
        this.isLoading = false;
      }
    });
  }
}
