import { Component, NgModule } from '@angular/core';
import { Route, RouterOutlet, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { DataService } from './services/data.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
// import { Console } from 'node:console';
import { catchError } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { AppModule } from './app.module';
// import { DetailComponent } from './detail/detail.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, FormsModule, CommonModule,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'know-Your-World';
  // title = 'Home' ;

  selectedCountry: string="";

  constructor (private service: DataService) { }

  onCountry(value: any) {
    this.selectedCountry = value;
    
  }

  // constructor(public Data: DataService){
  //   Data.getCountries.subscribe((countries)=>this.Data.getCountries)
  // }
  
}

