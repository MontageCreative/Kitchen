import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-profiles',
  templateUrl: './display-profiles.component.html',
  styleUrls: ['./display-profiles.component.css']
})
export class DisplayProfilesComponent implements OnInit {
  tab: string;
  checkboxes = {
    docketFormat: {id: 'showDocket', value: false},
    timers: {id: 'showTimers', value: false}
  };

  constructor() { }

  ngOnInit() {
    this.tab = '';
  }

  changeTabs(tab?: string): void {
    this.tab = tab ? tab : '';
  }
}
