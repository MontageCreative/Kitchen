import {MAT_DIALOG_DATA, MatDialogRef, MatDialog} from '@angular/material';
import {Component, Inject, OnInit} from '@angular/core';

import {CompletedOrdersComponent} from '../completed-orders/completed-orders.component';


@Component({
  selector: 'app-recall-item',
  templateUrl: './recall-item.component.html',
  styleUrls: ['./recall-item.component.css']
})
export class RecallItemComponent implements OnInit {
  public reason;

  constructor(public dialogRef: MatDialogRef<RecallItemComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private dialog: MatDialog) {
    this.reason = {
      first: true,
      second: false,
    };
  }

  ngOnInit(): void {
    this.dialogRef.afterClosed().subscribe(data => {
      this.dialog.open(CompletedOrdersComponent, {
        data: {
          tables: this.data.tables
        }
      });
    });
  }

  public onRecallItem(): void {
    this.data.order.done = false;
    const orderTypes = this.data.order.orderTypes;
    if (orderTypes) {
      orderTypes.forEach(function (value) {
        value.orders.forEach(function (data) {
          data.done = false;
        });
      });
      this.data.tables.splice(this.data.index, 1);
    }
    this.dialogRef.close();
  }

  onCheck(text, checked): void {
    this.reason.first = text === 'marked_in_error' ? (text === 'marked_in_error' && checked) : !(text === 'remaking_item' && checked);
  }
}
