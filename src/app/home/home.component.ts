import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // tslint:disable-next-line:no-inferrable-types
  // h1Style: boolean = false;
  users: Object;
  constructor(private ds: DataService) { }

  ngOnInit() {
    this.ds.getUsers().subscribe(res => {
      this.users = res;
      console.log(this.users);
    });
  }

  // firstClick() {
  //   this.h1Style = this.ds.firstClick(this.h1Style);
  // }

}
