import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  app_id: string = '1635890035cbba097fd5c26c8ea672a1';

  constructor(private httpClient: HttpClient) { }

  getWeatherDetails(city: string): Observable<any> {
    return this.httpClient.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${this.app_id}&cnt=5`);
  }

}
