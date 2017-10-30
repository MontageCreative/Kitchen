// modules
import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-edit-group-names',
  templateUrl: './edit-group-names.component.html',
  styleUrls: ['./edit-group-names.component.css']
})
export class EditGroupNamesComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EditGroupNamesComponent>) { }

  ngOnInit() {
  }

}
