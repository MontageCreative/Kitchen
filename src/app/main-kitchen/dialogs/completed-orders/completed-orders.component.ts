import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';

import {OrderDetailsComponent} from '../order-details/order-details.component';
import {RecallItemComponent} from '../recall-item/recall-item.component';

@Component({
  selector: 'app-completed-orders',
  templateUrl: './completed-orders.component.html',
  styleUrls: ['./completed-orders.component.css']
})
export class CompletedOrdersComponent implements OnInit {
  public tables;

  constructor(private dialog: MatDialog,
              public dialogRef: MatDialogRef<CompletedOrdersComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    this.tables = this.data.tables;
  }

  ngOnInit() {
    this.dialogRef.afterClosed().subscribe(data => {
      if (data && data.dialog === 'orderDetail') {
        this.dialog.open(OrderDetailsComponent, {
          data: {
            table: data.table,
            tables: this.tables,
            type: 'completed'
          }
        });
      } else if (data && data.dialog === 'recallItem') {
        this.dialog.open(RecallItemComponent, {
          data: {
            order: data.table,
            tables: this.tables,
            index: data.index
          }
        });
      }
    });
  }

  orderDetailsDialog(table): void {
    const data = {
      table: table,
      dialog: 'orderDetail'
    };
    this.dialogRef.close(data);
  }

  recallItemDialog(table, index): void {
    const data = {
      table: table,
      index: index,
      dialog: 'recallItem'
    };
    this.dialogRef.close(data);
  }

}
