import { Component, EventEmitter, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
// import { FormControl, FormGroup, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-home',
  standalone: true,
  // imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})

export class HomeComponent {

  country: string = '';
  city: string = '';
  population: any;
  flag: any;
  currency: any;
  long: any;
  lat: any;
  capital: any;
  constructor(private service: DataService){}

  onSearch(inputCountry: HTMLInputElement, inputCity: HTMLInputElement){
    this.country = inputCountry.value;
    this.city = inputCity.value;
    this.fetchCountryDetails(this.country, this.city);

  }

  fetchCountryDetails(country: string, city: string){
    this.service.getPopulation(country).subscribe((data) => {
      this.population = data.data.population[0].value;
    });

    this.service.getFlag(country).subscribe((data) => {
      this.flag = data.data.flag;
    });

    this.service.getCurrency(country).subscribe((data) => {
      this.currency = data.data.currency;
    });

    this.service.getLocation(country).subscribe((data) => {
      this.long = data.data.long;
      this.lat = data.data.lat;
    });

    this.service.getCapital(country).subscribe((data) => {
      this.capital = data.data.capital;
    });

  }
  
}