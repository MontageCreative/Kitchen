import {Component, OnInit, EventEmitter} from '@angular/core';
import {ISlimScrollOptions, SlimScrollEvent} from 'ngx-slimscroll';
import {CookieService} from 'ngx-cookie-service';
import {ActivatedRoute} from '@angular/router';
import {Title} from '@angular/platform-browser';

import {MainKitchenService} from './main-kitchen.service';

@Component({
  selector: 'app-main-kitchen',
  templateUrl: './main-kitchen.component.html',
  providers: [MainKitchenService]
})
export class MainKitchenComponent implements OnInit {
  public tables;
  options: ISlimScrollOptions;
  scrollEvents: EventEmitter<SlimScrollEvent>;

  constructor(private mainKitchenService: MainKitchenService,
              private cookieService: CookieService,
              private route: ActivatedRoute,
              private titleService: Title) {
    this.options = {
      barBackground: '#C9C9C9',
      gridBackground: '#D9D9D9',
      barBorderRadius: '5',
      barWidth: '2',
      gridWidth: '2'
    };

    this.scrollEvents = new EventEmitter<SlimScrollEvent>();
  }

  ngOnInit() {
    this.titleService.setTitle(this.route.snapshot.data.title);
    this.getTables();
  }

  private getTables() {
    const cookie = this.cookieService;
    this.mainKitchenService.getData().then(tables => {
      const allData = [];
      for (const tableIndex in tables) {
        if (tableIndex) {
          allData.push(tables[tableIndex]);
        }
      }

      allData.forEach(function (value) {
        if (cookie.getAll()[value.name] && value.name === JSON.parse(cookie.getAll()[value.name]).name) {
          value.isSnoozed = true;
        }
      });

      this.tables = allData;

      setInterval(function () {
        allData.forEach(function (value) {
          if (!cookie.getAll()[value.name] || !JSON.parse(cookie.getAll()[value.name]).name) {
            value.isSnoozed = false;
          }
        });
      }, 500);
      this.tables = allData;
    });
  }

}
