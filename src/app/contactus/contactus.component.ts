import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  constructor(private pgTitle: Title) {
    this.pgTitle.setTitle('Contact Us - Angular 10 Tutorials');
  }
  contact = {
    name: '',
    email: '',
    message: ''
  };
  OnSubmit = (contact: any) => {
    debugger;
    alert('Thank you "' + contact.name + '", We will contact you asap.');
  };
  ngOnInit() {}
}
