import { Component } from '@angular/core';
import { WeatherService } from '../servicios/weather.service';

@Component({
  selector: 'app-clima',
  templateUrl: './clima.page.html',
  styleUrls: ['./clima.page.scss'],
})
export class ClimaPage {
  latitude: number = 18.474322;
  longitude: number = -69.937026;
  weatherData: any;

  constructor(public weatherService: WeatherService) {}
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }

  getWeather() {
    if (this.latitude && this.longitude) {
      this.weatherService.getWeatherByCoords(this.latitude, this.longitude)
        .then((response: { data: any; }) => {
          this.weatherData = response.data;
        })
        .catch((error: any) => {
          console.error(error);
        });
    }
  }
}