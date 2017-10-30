import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-snooze-order',
  templateUrl: './snooze-order.component.html'
})
export class SnoozeOrderComponent implements OnInit {
  public minutes;

  constructor(public dialogRef: MatDialogRef<SnoozeOrderComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private cookieService: CookieService) {
  }

  ngOnInit() {

  }

  onChangeMinutes(value): void {
    switch (value) {
      case '+':
        this.minutes = (typeof this.minutes === 'number' && this.minutes < 25) ? this.minutes += 1 : this.minutes = 25;
        break;
      case '-':
        this.minutes = (typeof this.minutes === 'number' && this.minutes > 0) ? this.minutes -= 1 : this.minutes = 0;
        break;
      case 5:
        this.minutes = 5;
        break;
      case 10:
        this.minutes = 10;
        break;
      case 15:
        this.minutes = 15;
        break;
      case 20:
        this.minutes = 20;
        break;
    }
  }

  onSnoozeOrder(): void {
    if (this.checkMinutes()) {
      alert('Number must be less then 26 and more then 4');
    } else {
      this.data.table.isSnoozed = true;
      this.data.table.snoozedMinutes = this.minutes;
      const expirationDate = new Date(Date.now() + this.minutes * 60 * 1000);
      this.data.table.timeLeft = expirationDate;
      this.cookieService.set(this.data.table.name, JSON.stringify(this.data.table), expirationDate);
      this.dialogRef.close();
    }
  }

  checkMinutes(): boolean {
    const reg = /[0-9]{1,2}/;
    return this.minutes < 5 || this.minutes > 25 || !reg.test(this.minutes);
  }

}
