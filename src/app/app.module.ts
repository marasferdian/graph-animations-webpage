import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatDatepickerModule,
  MatInputModule,
  MatFormFieldModule,
  MatNativeDateModule,
  MatButtonToggleModule, MatButtonModule, MatGridListModule, MatCardModule
} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {CarsComponent} from './cars/cars.component';
import {RouterModule, Routes} from '@angular/router';
import {ReservationsComponent} from './reservations/reservations.component';
import {AvailabilityComponent} from './availability/availability.component';
import {SharedService} from './shared/shared.service';
import { SuccessComponent } from './success/success.component';

const appRoutes: Routes = [
  {path: '', component: ReservationsComponent},
  {path: 'cars', component: CarsComponent},
  {path: 'availability', component: AvailabilityComponent},
  {path: 'success', component: SuccessComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    ReservationsComponent,
    AvailabilityComponent,
    SuccessComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatButtonToggleModule,
    FormsModule,
    MatButtonModule,
    MatGridListModule,
    RouterModule.forRoot(appRoutes),
    MatCardModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
