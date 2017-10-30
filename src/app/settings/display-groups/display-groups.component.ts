// modules
import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';

// components
import {AddDisplayGroupComponent} from '../dialogs/add-display-group/add-display-group.component';
import {EditGroupNamesComponent} from '../dialogs/edit-group-names/edit-group-names.component';


@Component({
  selector: 'app-display-groups',
  templateUrl: './display-groups.component.html',
  styleUrls: ['./display-groups.component.css']
})
export class DisplayGroupsComponent implements OnInit {
  tab: string;
  checkboxes = [
    {
      id: 'entree',
      value: false,
      type: 'main',
      items: [
        {id: 'item1', value: false, type: 'sub'},
        {id: 'item2', value: false, type: 'sub'},
        {id: 'item3', value: false, type: 'sub'}
      ]
    },
    {
      id: 'main',
      value: false,
      items: [
        {id: 'item4', value: false, type: 'sub'},
        {id: 'item5', value: false, type: 'sub'},
        {id: 'item6', value: false, type: 'sub'}
      ],
      type: 'main'
    },
    {
      id: 'dessert',
      value: false,
      items: [
        {id: 'item7', value: false, type: 'sub'},
        {id: 'item8', value: false, type: 'sub'},
        {id: 'item9', value: false, type: 'sub'}
      ],
      type: 'main'
    }
  ];

  constructor(private dialog: MatDialog) {
  }

  ngOnInit() {
  }

  addDisplayGroupDialog(): void {
    this.dialog.open(AddDisplayGroupComponent);
  }

  onChange(checkboxObj): void {
    if (checkboxObj.items && checkboxObj.type === 'main') {
      checkboxObj.items.forEach(item => {
        item.value = !checkboxObj.value;
      });
    } else {
      this.checkboxes.forEach(checkbox => {
        if (checkbox.items) {
          // disable main button if one of them disabled
          checkbox.items.forEach(function (item) {
            if (JSON.stringify(item) === JSON.stringify(checkboxObj)) {
              checkbox.value = false;
            }
          });
        }
      });
    }

    checkboxObj.value = !checkboxObj.value;
    // check state if checkboxes and enable main button if all sub buttons are enabled
    this.checkboxes.forEach(function (checkbox) {
      let i = 0;
      if (checkbox.items) {
        checkbox.items.forEach(function (item) {
          if (item.value) {
            i++;
          }
        });
        if (i === checkbox.items.length && i !== 0) {
          checkbox.value = true;
        }
      }
    });
  }

  editGroupNamesDialog(): void {
    this.dialog.open(EditGroupNamesComponent);
  }

  onChangeTab(tab?: string) {
    this.tab = tab;
  }
}
