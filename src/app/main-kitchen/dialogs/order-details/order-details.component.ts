import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatDialog} from '@angular/material';
import {CookieService} from 'ngx-cookie-service';

import {SnoozedOrdersComponent} from '../snoozed-orders/snoozed-orders.component';
import {CompletedOrdersComponent} from '../completed-orders/completed-orders.component';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
  public table;
  public orderTypes;
  public now = new Date();

  constructor(public dialogRef: MatDialogRef<OrderDetailsComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private cookieService: CookieService,
              private dialog: MatDialog) {
    this.table = this.data.table;
    this.orderTypes = this.data.table.orderTypes;
  }

  ngOnInit() {
    this.dialogRef.afterClosed().subscribe(data => {
      if (this.data.type === 'snoozed') {
        this.dialog.open(SnoozedOrdersComponent);
      } else if (this.data.type === 'completed') {
        this.dialog.open(CompletedOrdersComponent, {
          data: {
            tables: this.data.tables
          }
        });
      }
    });
  }

  public onRecall(): void {
    this.table.done = false;
    const orderTypes = this.table.orderTypes;
    orderTypes.forEach(function (value) {
      value.orders.forEach(function (data) {
        data.done = false;
      });
    });
    this.cookieService.delete(this.data.tables[this.data.tables.indexOf(this.data.table)].name);
    this.data.tables.splice(this.data.tables.indexOf(this.table), 1);
    this.dialogRef.close();
  }

  getOrderStatusCount(order): number {
    let count = 0;
    const subOrders = [];

    for (const orderIndex in order.orders) {
      if (orderIndex) {
        subOrders.push(order.orders[orderIndex]);
      }
    }

    subOrders.forEach(function (value) {
      if (value.done) {
        count++;
      }
    });

    return count;
  }

  getOrderStatus(order): string {
    let count = 0;
    const subOrders = [];

    for (const orderIndex in order.orders) {
      if (orderIndex) {
        subOrders.push(order.orders[orderIndex]);
      }
    }

    subOrders.forEach(function (value) {
      if (value.done) {
        count++;
      }
    });

    if (count === order.orders.length) {
      return 'done';
    } else if (count < order.orders.length && count !== 0) {
      return 'in progress';
    } else {
      return 'pending';
    }
  }

  getOrderStatusClasses(order): string {
    return (this.getOrderStatus(order) === 'done') ? 'red' : (this.getOrderStatus(order) === 'in progress') ? 'green' : 'blue';
  }

}
