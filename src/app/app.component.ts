import { SeoService } from './seo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';

  constructor(private seo: SeoService) { }

  ngOnInit() {
    this.seo
      .setTitle('A new title')
      .setDescription('A new description');
  }
}
