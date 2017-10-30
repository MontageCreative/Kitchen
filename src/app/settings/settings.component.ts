import { Component, OnInit, EventEmitter } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {ISlimScrollOptions, SlimScrollEvent} from 'ngx-slimscroll';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  options: ISlimScrollOptions;
  scrollEvents: EventEmitter<SlimScrollEvent>;

  constructor(private router: ActivatedRoute,
              private titleService: Title) {
    this.scrollEvents = new EventEmitter<SlimScrollEvent>();
  }

  ngOnInit() {
    this.titleService.setTitle(this.router.snapshot.data.title);
  }

}
