import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-tfforms',
  templateUrl: './tfforms.component.html',
  styleUrls: ['./tfforms.component.css']
})
export class TFFormsComponent implements OnInit {
  fname: string = '';
  constructor(private pgTitle:Title) {
    this.pgTitle.setTitle('Template Driven Forms - Angular 10 Tutrials');
  }

  ngOnInit() {}
  saveForm = (dtls: NgForm) => {
    if (dtls !== null) {
      alert('Hi ' + dtls.value.fname + ', You are registered.');
    }
  };
  reloadform = (d: NgForm) => {
    // d.reset();
    d.resetForm();
  };
  loadform = (d: NgForm) => {
    let userData = {
      fname: 'Vinay'
    };
    d.setValue(userData);
  };
}
