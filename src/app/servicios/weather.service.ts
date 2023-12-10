import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = '810a1f2fb5ba9d38ed92642d2f1f30ba'; 

  getWeatherByCoords(lat: number, lon: number) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${this.apiKey}`;
    return axios.get(apiUrl);
  }
}
