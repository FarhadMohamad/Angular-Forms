import { Component, OnInit } from '@angular/core';
import { tv } from './tv';
import { Observable } from 'rxjs/Observable';
import { TvService } from './tv.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tv-show',
  templateUrl: './tv-show.component.html',
  styleUrls: ['./tv-show.component.css']
})
export class TvShowComponent implements OnInit {
  tv: Observable<tv[]>;
  language: string;
  sort: number;

  constructor(private TvService: TvService,
    private router: Router) { }

  ngOnInit() {
    this.language = this.TvService.getLanguage();
    this.getTvShows();
  }

  getTvShows() {
    this.tv = this.TvService.getTvShows();
  }

  dynamicSort(property) {
    let sortOrder = 1;
    if (property[0] === "-") {
      sortOrder = -1;
      property = property.substr(1);
    }
    return function (a, b) {
      let result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
      return result * sortOrder;
    }
  }

  sortTvShows(property: string) {
    if (property == 'title') {
      if (this.sort == 1) {
        this.tv = this.tv.map(items => items.sort(this.dynamicSort("-title")));
        this.sort = -1;
      }
      else {
        this.tv = this.tv.map(items => items.sort(this.dynamicSort("title")));
        this.sort = 1;
      }
    }
    else if (property == 'popularity') {
      if (this.sort == 2) {
        this.tv = this.tv.map(items => items.sort(this.dynamicSort("-popularity")));
        this.sort = -2;
      }
      else {
        this.tv = this.tv.map(items => items.sort(this.dynamicSort("popularity")));
        this.sort = 2;
      }
    }
  }

  onSelect(tv: tv) {
    this.router.navigate(['./../tv', tv.id]);
  }
}
