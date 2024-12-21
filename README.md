# Weather App UI Components
![1](https://github.com/user-attachments/assets/f346bf70-b68a-4f4d-b6d6-9742934ca640)
<hr />
![2](https://github.com/user-attachments/assets/e48f246d-7048-415f-8f2a-a170212b6b96)
<hr />
![3](https://github.com/user-attachments/assets/fc1bac71-beef-4ace-96fe-746e33c937d2)
<hr />

This project provides a simple UI to view weather data for cities worldwide. Users can explore weather forecasts, search for specific cities or dates, and toggle between temperature units.

## Features

1. **List Weather Forecasts**  
   Display the latest available weather data for all cities.
   
2. **Search for a City**  
   Use a search bar to fetch weather details for a specific city.  
   *Hint:* Use the API endpoint `/cityForecast/:cityId` to retrieve data for a specific city.
   
3. **Filter by Date**  
   Use a date dropdown to view weather information for a specific date.  
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

### Run Backend
Our API was created using Node.js v10.6.0. Other versions may or may not work correctly. 
#### Installation 
1. **In ./src run:** 
- npm ci 

#### Run 
2. **In ./src run:** 
- npm start  


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
