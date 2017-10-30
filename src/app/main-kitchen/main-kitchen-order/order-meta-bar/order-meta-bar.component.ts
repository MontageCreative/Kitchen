import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-order-meta-bar',
  templateUrl: './order-meta-bar.component.html'
})
export class OrderMetaBarComponent implements OnInit {
  @Input() public table;

  constructor() {}

  ngOnInit() {}
}
