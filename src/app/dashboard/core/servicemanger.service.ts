import { Injectable } from '@angular/core';
import { SearchService } from '../services/search.service';

@Injectable({
  providedIn: 'root',
})
export class ServicemangerService {
  // Variable Declaration and initialization
  ADULT_LIMIT: number = 9;
  CHILDREN_LIMIT: number = 9;
  INFANTS_LIMIT: number = 5;
  airports: any;
  errmessage: string = '';
  posts: any;
  data: any;

  //Dependancy Injection
  constructor(private searchApi: SearchService) {}

  getAirports() {
    //Call to service class to get the travel classes from JSON
    let airports = this.searchApi.getAirports();

    // Return the travel classes
    return airports;
  }

  getTravelClasses() {
    //Call to service class to get the travel classes from JSON
    let travelClass = this.searchApi.getTravelClasses();

    // Return the travel classes
    return travelClass;
  }

  getAirline() {
    //Call to service class to get the airline from JSON
    let travelClass = this.searchApi.getAirlineDetails();
    console.log('airlinedetails', travelClass);
    // Return the prefered airline values
    return travelClass;
  }
  //Method to get the Dropdown for the Adult limit
  getAdultLimit() {
    let ADULT_LIMIT = [];
    for (let i: any = 0; i <= ADULT_LIMIT; i++) {
      ADULT_LIMIT.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
    }
    console.log(ADULT_LIMIT);
    return ADULT_LIMIT;
  }

  //Method to get the Dropdown for the children limit
  getChildrenLimit() {
    let CHILDREN_LIMIT = [];
    for (let i: any = 0; i <= CHILDREN_LIMIT; i++) {
      CHILDREN_LIMIT.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
    }
    console.log(CHILDREN_LIMIT);
    return CHILDREN_LIMIT;
  }

  //Method to get the Dropdown for the Infants limit

  getInfantsLimit() {
    let INFANTS_LIMIT = [];
    for (let i: any = 0; i <= INFANTS_LIMIT; i++) {
      INFANTS_LIMIT.push(1, 2, 3, 4, 5);
    }
    return INFANTS_LIMIT;
  }
}
