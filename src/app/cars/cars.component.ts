import { Component, OnInit } from '@angular/core';
import {Car} from './car.model';
import {SharedService} from '../shared/shared.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  public cars = new Array();
  public brand;
  public rentalOffice;
  public filteredCars;
  constructor(public sharedService: SharedService, private router: Router) { }

  ngOnInit() {
    const car1 = new Car('Volvo','volvoModel1','Timisoara Centru');
    const car2 = new Car('Audi','A4','Cluj Piezisa');
    const car3 = new Car('Mercedes', 'C220', 'Bucuresti Afi');
    const car4 = new Car('Mercedes','Sprinter','Timisoara Lipovei');
    this.cars.push(car1,car2,car3,car4);
    this.brand = this.sharedService.brand;
    this.rentalOffice = this.sharedService.rentalOffice;
    this.filteredCars = this.cars.filter(car => car.brand === this.brand && car.rentalOffice === this.rentalOffice);

  }
  onClickLike(car:Car){
    //this.sharedService.checkAvailability(car);
    this.router.navigate(['/availability']);

  }
  onClickTakeBack(){
    this.router.navigate(['']);
  }
  isListNotEmpty() {
    return this.filteredCars.length !== 0;
  }

}
