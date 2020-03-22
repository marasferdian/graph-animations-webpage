import {Injectable} from '@angular/core';

@Injectable()
export class SharedService {
  public brand;
  public rentalOffice;

  setFilterValues(brand:string, rentalOffice: string) {
    this.brand = brand;
    this.rentalOffice = rentalOffice;
}
}
