import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { catchError, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  city: string = 'Visakhapatnam';
  cityWeatherReports: any[] = [];
  isLoading: boolean = false;

  constructor(private WeatherService: WeatherService) { }
  

  ngOnInit(): void {
    this.getWeatherReport(this.city);
  }

  getWeatherReport(city: string): void {
    this.isLoading = true;
    this.WeatherService.getWeatherDetails(city).subscribe(data => {
      if (data && data.list) {
        this.cityWeatherReports = data.list;
        this.isLoading = false;
      } 
    }, () => {
      this.isLoading = false;
      this.cityWeatherReports = [];
     });
  }


}
