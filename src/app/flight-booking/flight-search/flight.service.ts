import { Injectable, Inject } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Http, Headers, URLSearchParams } from "@angular/http";
import { Flight } from "app/entities/flight";
import { BASE_URL } from "app/app.tokens";
import { OAuthService } from "angular-oauth2-oidc/dist";

@Injectable()
export class FlightService {

    constructor(
        private oauthService: OAuthService,
        private http: Http,
        @Inject(BASE_URL) private baseUrl: string) {
            
        console.debug('Schöne Grüße aus dem Konstruktor!');
    }

    flights: Flight[] = [];



    find(from: string, to: string): void
    {
        let headers = new Headers();
        headers.set('Accept', 'application/json');
        headers.set('Authorization', this.oauthService.authorizationHeader())

        let search = new URLSearchParams();
        search.set('from', from);
        search.set('to', to);

        let url = this.baseUrl + '/secureflight/byRoute';

        this.http
            .get(url, {  headers, search})
            .map(resp => resp.json())
            .subscribe(
                flights => {
                    this.flights = flights

                },
                err => console.error('Fehler beim Laden!')
            );

    }
}