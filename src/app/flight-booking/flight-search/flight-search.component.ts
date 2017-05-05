import { Component, OnInit } from '@angular/core';
import { Flight } from "app/entities/flight";
import { Http, URLSearchParams, Headers } from "@angular/http";
import { FlightService } from "app/flight-booking/flight-search/flight.service";
import { Observable, Observer } from "rxjs";

@Component({
    selector: 'flight-search',
    templateUrl: './flight-search.component.html',
    styleUrls: ['./flight-search.component.css'],
    providers: []
})
export class FlightSearchComponent implements OnInit {
    
    constructor(private flightService: FlightService) { 
    }

message: string = "";
    validate() {
        if (
            this.from == 'Graz' 
            || this.from == 'Zürich' 
            || this.from == 'Hamburg') {

                this.message = "Des geht!";

            }
    }



    allowedCities = 'Graz,Nürnberg,Hamburg';

    basket: any = {
        "3": true,
        "4": false,
        "5": true
    };

    from: string;
    to: string;

    // flights: Array<Flight> = [];
    selectedFlight: Flight;

    // let x = comp.flights;
    get flights() {
        return this.flightService.flights;
    }


    search(): void {


            this
                .flightService
                .find(this.from, this.to);

            

}
    
    select(f: Flight): void {
        this.selectedFlight = f;
    }

    ngOnInit() { }
}
