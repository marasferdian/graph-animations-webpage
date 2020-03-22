import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-availability',
  templateUrl: './availability.component.html',
  styleUrls: ['./availability.component.css']
})
export class AvailabilityComponent implements OnInit {
  available: boolean;
  price: number;
  constructor(private router: Router) { }

  ngOnInit() {
    this.price = Math.round(Math.random());
    this.available = Math.random() >= 0.5;
  }
  isAvailable() {
    return this.available;
  }
  onTakeBack() {
    this.router.navigate(['/cars']);
  }

}
