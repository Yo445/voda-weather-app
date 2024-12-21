# Weather App UI Components

This project provides a simple UI to view weather data for cities worldwide. Users can explore weather forecasts, search for specific cities or dates, and toggle between temperature units.

## Features

1. **List Weather Forecasts**  
   Display the latest available weather data for all cities.
   
2. **Search for a City**  
   Use a search bar to fetch weather details for a specific city.  
   *Hint:* Use the API endpoint `/cityForecast/:cityId` to retrieve data for a specific city.
   
3. **Search by Date**  
   Use a date picker to view weather information for a specific date.  
   *Note:* Each city object contains the entire forecast in the `forecast` property.
   
4. **Temperature Unit Toggle**  
   Switch between Celsius and Fahrenheit to view temperature in the desired unit.

## Tips

- The project emphasizes small, reusable components.
- Focus on code quality, adherence to conventions, and formatting.
- Use libraries as needed, but ensure they are justified and documented.
- Clean up unnecessary code.
- Feel free to explore creative solutions and designs.

## API Details

The application integrates with a REST API to fetch weather data.

### Endpoints

| Method | Endpoint               | Description                     | Response                  |
|--------|-------------------------|---------------------------------|---------------------------|
| `GET`  | `/forecast`            | Returns weather for all cities | `Array<City>`            |
| `GET`  | `/cityForecast/:cityId`| Returns weather for one city   | `City`                   |

### Types

#### City Interface

```typescript
interface City {
  id: number;
  city: string;
  forecast: [
    {
      date: string;
      temperatureCelsius: number;
      temperatureFahrenheit: number;
      humidity: number;
    }
  ];
}
