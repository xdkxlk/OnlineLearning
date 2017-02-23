///<reference path="../../typings/index.d.ts"/>

import {Component, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  title = 'app works!';

  constructor() {
  }

  ngAfterViewInit(): void {
    $(".carousel").carousel();
  }

}
