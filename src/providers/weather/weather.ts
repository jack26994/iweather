import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class WeatherProvider {
  apiKey = 'c36d94ea0bbb6092';
  url;

  constructor(public http: HttpClient) {    
    this.url = `http://api.wunderground.com/api/${this.apiKey}/conditions/q/`;
  }

  getWeather(city, state): Observable<any> {
    console.log('Getting Weather at getWeather');
    return this.http.get(`${this.url}/${state}/${city}.json`);
  }

}
