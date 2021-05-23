import { Component, VERSION } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private pgTitle: Title) {
    this.pgTitle.setTitle('Home - Angular 10 Tutorials');
  }
  name = 'Angular ' + VERSION.major;
  todaysDate = new Date();
  isAdded = randomVals(1, 6);
  currVal = 0;
  userName = '';
  OnChange = (eve: any) => {
    this.currVal = parseInt(eve.target.value) + 1;
    return this.currVal;
  };
  OnBlur = (e: any) => {
    debugger;
    if (
      e.target.value != undefined &&
      e.target.value != null &&
      e.target.value != ''
    ) {
      this.userName = e.target.value;
      alert('You have entered ' + this.userName.length + ' character(s). ');
    } else {
      e.target.focus();
    }
  };
}
let randomVals = (min, max) => {
  return Math.ceil(Math.random() * (max - min) + min);
};
