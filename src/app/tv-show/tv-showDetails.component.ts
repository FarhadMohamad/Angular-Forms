import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TvService } from '../tv-show/tv.service';
import { tv } from '../tv-show/tv';
import { Location } from '@angular/common';

@Component({
  selector: 'app-tv-showDetails',
  templateUrl: './tv-showDetails.component.html',
  styleUrls: ['./tv-showDetails.component.css']
})
export class TvShowDetailsComponent implements OnInit {
  selectedTvShow: tv;
  errorMessage: string;


  constructor(
    private TvService: TvService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {

    this.route.params.subscribe(
      params => {
        let id = params['id'];
        if (id) this.getDetails(id);
      });
  }

  getDetails(id: number) {
    this.TvService.getDetails(id)

      .subscribe(
        response => this.selectedTvShow = response,
        error => this.errorMessage = <any>error);

  }

  back() {
    this.location.back();
  }
}
