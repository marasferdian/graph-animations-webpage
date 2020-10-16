import {Injectable} from '@angular/core';

@Injectable()
export class SharedService {
  public algorithm;

  setAlgorithm(algorithm) {
    this.algorithm = algorithm;
  }
}
