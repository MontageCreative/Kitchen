import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';

import {SnoozedOrdersComponent} from '../dialogs/snoozed-orders/snoozed-orders.component';
import {CompletedOrdersComponent} from '../dialogs/completed-orders/completed-orders.component';

@Component({
  selector: 'app-main-kitchen-sidebar',
  templateUrl: './main-kitchen-sidebar.component.html'
})
export class MainKitchenSidebarComponent implements OnInit {
  @Input() tables;

  constructor(private dialog: MatDialog) {
  }

  ngOnInit() {
  }

  snoozedOrdersDialog() {
    this.dialog.open(SnoozedOrdersComponent);
  }

  completedOrdersDialog() {
    this.dialog.open(CompletedOrdersComponent, {
      data: {
        tables: this.tables.filter(function (value) {
          return value.done;
        })
      }
    });
  }
}
