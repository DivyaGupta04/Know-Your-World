import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(
    private http: HttpClient
  ) { }
  getPopulation(city: string): Observable<any> {
    let header = new HttpHeaders();
    return this.http.post<HttpClient>("https://countriesnow.space/api/v0.1/countries/population/cities",{"city": city},{"headers":header});
  }

  getFlag(country: string): Observable<any> {
    let header = new HttpHeaders();
    return this.http.post<HttpClient>('https://countriesnow.space/api/v0.1/countries/flag/images',{"country": country},{"headers":header});
   }

  getCurrency(country: string): Observable<any> {
    let header = new HttpHeaders();
    return this.http.post<HttpClient>('https://countriesnow.space/api/v0.1/countries/currency',{"country": country},{"headers":header});
    }

  getLocation(country: string): Observable<any> {
    let header = new HttpHeaders();
    return this.http.post<HttpClient>('https://countriesnow.space/api/v0.1/countries/positions',{"country": country},{"headers":header});
    }

  getCapital(country: string): Observable<any> {
    let header = new HttpHeaders();
    return this.http.post<HttpClient>('https://countriesnow.space/api/v0.1/countries/capital',{"country": country},{"headers":header});
    }

}

// import { HttpClient, HttpHandler, HttpHeaders, HttpParams } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class DataService {

//   constructor(private http: HttpClient) { }

//   // Method to fetch countries
//   // getCountries(): Observable<any> {
//   //   return this.http.get("https://countriesnow.space/api/v0.1/countries/positions");
//   // }

//   // // Method to fetch cities 
//   // getCities(countryName: any): Observable<any> {
//   //   return this.http.post("https://countriesnow.space/api/v0.1/countries/population/cities", {"country": countryName});
//   // }

//   //Method to fetch population by country
//   getPopulation(city: string): Observable<any> {
//     let header = new HttpHeaders();
//     return this.http.post<HttpClient>("https://countriesnow.space/api/v0.1/countries/population/cities", {"city": city},{"headers": header});
//   }

//   // Method to fetch population by city
//   // getPopulationByCity(name: any) {
//   //   return this.http.post("https://countriesnow.space/api/v0.1/countries/population/cities", {"city": name});
//   // }

//   // Method to fetch location coordinates by country
//   getLocation(country: string): Observable<any> {
//     let header = new HttpHeaders();
//     return this.http.post<HttpClient>("https://countriesnow.space/api/v0.1/countries/positions", {"country": country}, {"headers": header});
//   }

//   // Method to fetch capital by country
//   getCapital(country: string): Observable<any> {
//     let header = new HttpHeaders();
//     return this.http.post<HttpClient>("https://countriesnow.space/api/v0.1/countries/capital", {"country": country}, {"headers": header});
//   }

//   // Method to fetch currency by country
//   getCurrency(country: string): Observable<any> {
//     let header = new HttpHeaders();
//     return this.http.post<HttpClient>("https://countriesnow.space/api/v0.1/countries/currency", {"country": country}, {"headers": header});
//   }
// }
