import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {Component, EventEmitter, Inject, Input, Output} from '@angular/core';

@Component({
  selector: 'bump-order',
  templateUrl: 'bump-order.component.html'
})
export class BumpOrderComponent {
  constructor(public dialogRef: MatDialogRef<BumpOrderComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  pushOrUnshift(push) {
    let modalData = this.data;
    modalData.tables.forEach(function (value, key) {
      if (value.id === modalData.table.id) {
        modalData.tables.splice(key, 1);
        push ? modalData.tables.push(value) : modalData.tables.unshift(value);
      }
    });
    this.dialogRef.close();
  }

}
