import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { CityPipe } from "app/shared/pipes/city.pipe";
import { CityValidationDirective } from "app/shared/validation/city.validation.directive";
import { RoundTripValidationDirective } from "app/shared/validation/round-trip.validation.directive";
import { AsyncCityValidationDirective } from "app/shared/validation/async-city.validation.directive.1";
import { AuthGuard } from "app/shared/auth/auth.guard";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        CityPipe,
        CityValidationDirective,
        RoundTripValidationDirective,
        AsyncCityValidationDirective
    ],
    providers: [
        AuthGuard
    ],
    exports: [
        CityPipe,
        CityValidationDirective,
        RoundTripValidationDirective,
        AsyncCityValidationDirective
    ]
})
export class SharedModule { }
