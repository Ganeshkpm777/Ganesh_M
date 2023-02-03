import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import AirportDetails from '../store/airports.json';
import TravelClasses from '../store/travelClasses.json';
import AirlineDetails from '../store/flights.json';
import { Flight } from '../models/flight';
import { TravelClass } from '../models/travel-class';
import { Airport } from '../models/airport';
@Injectable({
  providedIn: 'root',
})
export class SearchService {
  // Variable declaration

  airportobj: Airport[] = [];
  airportdetails = {
    airports: this.airportobj,
  };

  travelobj: TravelClass[] = [];
  traveldetails = {
    travelClasses: this.travelobj,
  };

  airlineobj: Flight[] = [];
  airlinedetails = {
    flights: this.airlineobj,
  };

  //Dependancy Injection
  constructor(private http: HttpClient) { }

  //Method to get the Airport details from the JSON file
  getAirports() {
    this.airportdetails = AirportDetails;
    return this.airportdetails;
  }

  //Method to get the Travel class details from the JSON file
  getTravelClasses() {
    this.traveldetails = TravelClasses;
    return this.traveldetails;
  }

  //Method to get the Airline details details from the JSON file
  getAirlineDetails() {
    this.airlinedetails = AirlineDetails;
    return this.airlinedetails;
  }


}

