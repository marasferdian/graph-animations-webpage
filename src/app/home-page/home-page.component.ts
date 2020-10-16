import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {SharedService} from '../shared/shared.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  search;
  constructor(private router: Router, private sharedService: SharedService) {

  }
  ngOnInit(): void {
  }

  onClick() {
    this.sharedService.setAlgorithm(this.search);
    this.router.navigate(['/algorithm-animation']);
  }


}
