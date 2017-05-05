

import { Component, OnInit } from '@angular/core';
import { OAuthService } from "angular-oauth2-oidc/dist";

@Component({
    selector: 'home',
    template: `
        <h1 *ngIf="userName">Willkommen, {{userName}}!</h1>
        <h1 *ngIf="!userName">Willkommen!</h1>

        <button (click)="login()">Login</button>
        <button (click)="logout()">Logout</button>
        <p>max/geheim</p>
    `
})

export class HomeComponent implements OnInit {
    constructor(private oauthService: OAuthService) { }

    login() {
        this.oauthService.initImplicitFlow();
    }

    logout() {
        this.oauthService.logOut();
    }

    get userName() {
        let claims = this.oauthService.getIdentityClaims();
        console.debug('claims', claims);
        if (!claims) return null;
        return claims['given_name'];
    }

    ngOnInit() { }
}