import { Component, OnInit } from '@angular/core';
import {SharedService} from '../shared/shared.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-algorithm-gif',
  templateUrl: './algorithm-gif.component.html',
  styleUrls: ['./algorithm-gif.component.css']
})
export class AlgorithmGifComponent implements OnInit {

  algorithm;
  constructor(public sharedService: SharedService, private router: Router) { }

  ngOnInit() {
    this.algorithm = this.sharedService.algorithm;
  }

  onClick() {
    this.router.navigate(['../']);
  }
}
