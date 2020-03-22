import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {SharedService} from '../shared/shared.service';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {

  startDate;
  endDate;
  car;
  rentalOffice;
  constructor(private router: Router, private sharedService: SharedService) {

  }
  ngOnInit(): void {
  }
  onStartDateChanged(value: any) {
    this.startDate = value;
  }
  onEndDateChanged(value: any) {
    this.endDate = value;
  }
  onClick() {
    this.sharedService.setFilterValues(this.car, this.rentalOffice);
    this.router.navigate(['/cars']);
  }


}
