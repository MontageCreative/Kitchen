import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';


@Component({
  selector: 'app-add-display-group',
  templateUrl: './add-display-group.component.html',
  styleUrls: ['./add-display-group.component.css']
})
export class AddDisplayGroupComponent implements OnInit {
  checkboxes = [
    {id: 'mainKitchen1', value: false},
    {id: 'mainKitchen2', value: false},
    {id: 'mainKitchen3', value: false}
  ];

  constructor(public dialogRef: MatDialogRef<AddDisplayGroupComponent>) {
  }

  ngOnInit() {
  }

}
