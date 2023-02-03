export class Airport {
  IATA_code: string;
  ICAO_code: string;
  airport_name: string;
  city_name: string;

  constructor(
    IATA_code: string,
    ICAO_code: string,
    city_name: string,
    airport_name: string
  ) {
    this.IATA_code = IATA_code;
    this.ICAO_code = ICAO_code;
    this.city_name = city_name;
    this.airport_name = airport_name;
  }
}
