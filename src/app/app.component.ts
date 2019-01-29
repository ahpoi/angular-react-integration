import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ErrorPage } from './react-integration/error-page';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  helloComponent: ErrorPage;

  ngOnInit() {
    this.helloComponent = ReactDOM.render(
      React.createElement(ErrorPage), document.getElementById('react-root')
    );
  }

}
