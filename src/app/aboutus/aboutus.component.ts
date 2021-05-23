import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {
  isDirty = true;
  constructor(private pgTitle: Title, private activatedRoute: ActivatedRoute) {
    this.pgTitle.setTitle('About Us - Angular 10 Tutorials');
  }
  teamData = [];
  ngOnInit() {
    this.teamData = this.activatedRoute.snapshot.data.data;
  }
}
