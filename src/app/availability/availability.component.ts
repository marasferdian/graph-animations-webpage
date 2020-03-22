import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-availability',
  templateUrl: './availability.component.html',
  styleUrls: ['./availability.component.css']
})
export class AvailabilityComponent implements OnInit {
  available: boolean;
  price: string;
  constructor(private router: Router) { }

  ngOnInit() {
    this.price = Math.floor(Math.random() * 100) + 100 + '$';
    this.available = Math.random() >= 0.5;
  }
  isAvailable() {
    return this.available;
  }
  onTakeBack() {
    this.router.navigate(['/cars']);
  }
  onBook() {
    this.router.navigate(['/success'
    ]);
  }

}
