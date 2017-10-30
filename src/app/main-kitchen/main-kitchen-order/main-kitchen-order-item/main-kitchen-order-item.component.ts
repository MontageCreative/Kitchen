import {Component, OnInit, Input} from '@angular/core';
import {MatDialog} from '@angular/material';

import {RecallItemComponent} from '../../dialogs/recall-item/recall-item.component';

@Component({
  selector: 'app-main-kitchen-order-item',
  templateUrl: './main-kitchen-order-item.component.html'
})
export class MainKitchenOrderItemComponent implements OnInit {
  @Input() public order;
  @Input() public table;
  private interval;

  constructor(private dialog: MatDialog) {
  }

  ngOnInit() {
  }

  public getClassesForOrder(order) {
    return {
      timeText: order.needTiming,
      done: order.done
    };
  }

  public getClassesForTimer(order) {
    return {
      red: order.needTiming && order.done,
      green: order.needTiming && !order.done
    };
  }

  public cook(order) {
    if (order.done) {
      this.recallItemDialog(order);
    } else {
      if (order.ready && !order.done) {
        order.done = true;

        if (order.needTiming) {
          clearInterval(this.interval);
          this.table.customer.timer += order.timer;
        }
      } else if (order.needTiming && !order.done) {
        order.ready = true;
        this.interval = setInterval(() => order.timer++, 1000);
      }
    }
  }

  recallItemDialog(order): void {
    this.dialog.open(RecallItemComponent, {
      data: {
        order: order
      }
    });
  }
}
