import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {CookieService} from 'ngx-cookie-service';

import {OrderDetailsComponent} from '../order-details/order-details.component';

@Component({
  selector: 'app-snoozed-orders',
  templateUrl: './snoozed-orders.component.html',
  styleUrls: ['./snoozed-orders.component.css']
})
export class SnoozedOrdersComponent implements OnInit {
  public tables;

  constructor(public dialogRef: MatDialogRef<SnoozedOrdersComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private cookieService: CookieService,
              private dialog: MatDialog) {
    const snoozedTables = [];
    const cookieTables = cookieService.getAll();
    for (const tableIndex in cookieTables) {
      if (tableIndex) {
        snoozedTables.push(JSON.parse(cookieTables[tableIndex]));
      }
    }

    this.tables = snoozedTables;
  }

  ngOnInit() {
    this.dialogRef.afterClosed().subscribe(table => {
      if (table && table.isSnoozed) {
        this.dialog.open(OrderDetailsComponent, {
          data: {
            table: table,
            tables: this.tables,
            type: 'snoozed'
          }
        });
      }
    });
  }

  onRecallOrder(i): void {
    this.cookieService.delete(this.tables[i].name);
    this.tables.splice(i, 1);
  }

  orderDetailsDialog(table): void {
    this.dialogRef.close(table);
  }
}
