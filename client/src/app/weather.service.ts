import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { City } from './models/city';



@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private baseUrl = 'http://localhost:4454'; // replace with your backend API URL

  constructor(private http: HttpClient) {}

//---------< Apis >---------\\

  // Get all cities weather
  getCitiesWeather(): Observable<City[]> {
    return this.http.get<City[]>(`${this.baseUrl}/forecast`);
  }

  // Get weather for a specific city
  getCityWeather(cityId: number): Observable<City> {
    return this.http.get<City>(`${this.baseUrl}/cityForecast/${cityId}`);
  }
}
