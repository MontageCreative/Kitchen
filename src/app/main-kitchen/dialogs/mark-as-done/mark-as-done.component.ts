import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-mark-as-done',
  templateUrl: './mark-as-done.component.html',
  styleUrls: ['./mark-as-done.component.css']
})
export class MarkAsDoneComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<MarkAsDoneComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  public title: string;
  public message: string;

  ngOnInit() {
  }

  onComplete(): void {
    const orderTypes = this.data.table.orderTypes;
    this.data.table.done = true;
    this.data.table.completeTime = new Date(Date.now());
    orderTypes.forEach(function (orderType) {
      orderType.orders.forEach(function (order) {
        order.done = true;
      });
    });
    this.dialogRef.close();
  }

}
