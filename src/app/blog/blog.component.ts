import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  searchFilters = [];
  constructor(private pgTitle: Title, private qParams: ActivatedRoute) {
    this.pgTitle.setTitle('Blog Posts - Angular 10 Tutorials');
    this.qParams.queryParams.subscribe(p => {
      // this.searchFilters[0] = p.k;
      // this.searchFilters[1] = p.c;
      // this.searchFilters[2] = p.a;
      console.log(p);
    });
  }
  articleCount = 1;

  ngOnInit() {}
}
