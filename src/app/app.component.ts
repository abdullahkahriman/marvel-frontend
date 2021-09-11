import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MarvelService } from 'src/services/marvel.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  dtos: any[] = []
  loading = false
  page = environment.limit
  limit = environment.limit

  constructor(private readonly marvelApi: MarvelService) {

  }

  ngOnInit(): void {
    this.init();
  }

  init() {
    this.loading = true;
    this.marvelApi.getCharacters(this.page).subscribe(resp => {
      this.dtos = resp;
      this.loading = false;
    }, err => {
      this.loading = false;
    })
  }

  next() {
    this.page += this.limit;
    this.init();
  }

  prev() {
    this.page -= this.limit;
    if (this.page < this.limit)
      this.page = this.limit;

    this.init();
  }

}
