import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-rfforms',
  templateUrl: './rfforms.component.html',
  styleUrls: ['./rfforms.component.css']
})
export class RFFormsComponent implements OnInit {
  addUserForm: FormGroup;
  userName: any = '';
  userPaswd: any = '';
  constructor(private pgTitle: Title) {
    this.pgTitle.setTitle('Reactive Forms - Angular 10 Tutrials');
  }

  ngOnInit() {
    this.addUserForm = new FormGroup({
      userName: new FormControl(),
      userPaswd: new FormControl()
    });
  }
}
