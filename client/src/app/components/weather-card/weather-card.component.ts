import { Component, Input } from '@angular/core';
import { City } from '../../models/city';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-weather-card',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css']
})
export class WeatherCardComponent {
  @Input() city!: City;
  selectedUnit: 'C' | 'F' = 'C'; // Default to Celsius
  selectedDate?: string;


  // Function to toggle the temperature unit
toggleUnit(event: Event): void {
  const isChecked = (event.target as HTMLInputElement).checked;
  this.selectedUnit = isChecked ? 'F' : 'C';
}


  ngOnInit(): void {
    this.selectedDate = this.city.forecast[4].date; // Default to the latest forecast date
  }

  // city icons
  getCityIcon(): string {
    const formattedCityName = this.city.city.toLowerCase().replace(/ /g, '-');
    return `assets/icons/${formattedCityName}.png`;
  }

  // Get temperature based on the selected date
  getTemperature(): number | undefined {
    const forecast = this.city.forecast.find(f => f.date === this.selectedDate);
    return forecast
      ? this.selectedUnit === 'C'
        ? forecast.temperatureCelsius
        : forecast.temperatureFahrenheit
      : undefined;
  }


}
