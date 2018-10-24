import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
// tslint:disable-next-line:no-inferrable-types
  heading: string = 'NG7 Web Site';
  constructor() { }

  ngOnInit() {
  }

}
