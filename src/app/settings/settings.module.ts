// modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {settingsRoutingModule} from './settings-routing.module';

// components
import {SettingsComponent} from './settings.component';
import { DisplayDevicesComponent } from './display-devices/display-devices.component';
import { DisplayGroupsComponent } from './display-groups/display-groups.component';
import { DisplayProfilesComponent } from './display-profiles/display-profiles.component';
import {NgSlimScrollModule} from 'ngx-slimscroll';
import {MatSelectModule} from '@angular/material';
import { AddDisplayGroupComponent } from './dialogs/add-display-group/add-display-group.component';
import {FormsModule} from '@angular/forms';
import { EditGroupNamesComponent } from './dialogs/edit-group-names/edit-group-names.component';
import { ToggleDropdownDirective } from './directives/toggle-dropdown.directive';

@NgModule({
  imports: [
    CommonModule,
    settingsRoutingModule,
    MatSelectModule,
    NgSlimScrollModule,
    FormsModule
  ],
  declarations: [
    SettingsComponent,
    DisplayDevicesComponent,
    DisplayGroupsComponent,
    DisplayProfilesComponent,
    AddDisplayGroupComponent,
    EditGroupNamesComponent,
    ToggleDropdownDirective
  ],
  entryComponents: [
    AddDisplayGroupComponent,
    EditGroupNamesComponent
  ]
})
export class SettingsModule { }
