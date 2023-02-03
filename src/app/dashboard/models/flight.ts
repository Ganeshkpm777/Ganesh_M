export class Flight {
id: number;
number: string;
name: string;
flightCapacity: number;
airline: string;
  constructor(id: number, number: string, name: string, flightCapacity:number, airline: string) {
      this.id = id;
      this.number = number;
      this.name = name;
      this.flightCapacity = flightCapacity;
      this.airline = airline;
  }
}
