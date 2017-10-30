import {Component, OnInit, Input} from '@angular/core';
import {MatDialog} from '@angular/material';

import {BumpOrderComponent} from '../dialogs/bump-order/bump-order.component';
import {MarkAsDoneComponent} from '../dialogs/mark-as-done/mark-as-done.component';
import {SnoozeOrderComponent} from '../dialogs/snooze-order/snooze-order.component';

@Component({
  selector: 'app-main-kitchen-order',
  templateUrl: './main-kitchen-order.component.html'
})
export class MainKitchenOrderComponent implements OnInit {
  @Input() public table;
  @Input() public tables;
  @Input() public indexT;
  constructor(private dialog: MatDialog) {
  }

  ngOnInit() {
  }

  private getDonesCount(orders) {
    let donesCount = 0;

    orders.forEach(order => {
      if (order.done) {
        donesCount++;
      }
    });

    return donesCount;
  }

  public ordersCounter(orders) {
    const length = orders.length;
    const donesCount = this.getDonesCount(orders);

    return `${length}/${donesCount}`;
  }

  public getTextForHeader(orders) {
    const donesCount = this.getDonesCount(orders);

    if (donesCount === 0) {
      return 'pending';
    } else if (donesCount < orders.length) {
      return 'in progress';
    } else if (donesCount === orders.length) {
      return 'done';
    }
  }

  public getClassForHeader(orders) {
    const donesCount = this.getDonesCount(orders);
    // console.log(donesCount < orders.length);
    return {
      blue: donesCount === 0,
      green: donesCount < orders.length,
      red: donesCount === orders.length
    };
  }

  bumpOrderDialog() {
    this.dialog.open(BumpOrderComponent, {
      data: {
        table: this.table,
        tables: this.tables
      }
    });
  }

  markAsDoneDialog() {
    this.dialog.open(MarkAsDoneComponent, {
      data: {
        table: this.table
      }
    });
  }

  snoozeOrderDialog() {
    this.dialog.open(SnoozeOrderComponent, {
      data: {
        table: this.table
      }
    });
  }
}
