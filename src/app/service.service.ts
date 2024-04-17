import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  // Method to fetch countries
  getCountries(): Observable<any> {
    return this.http.get("https://countriesnow.space/api/v0.1/countries/positions");
  }

  // Method to fetch cites 
}
