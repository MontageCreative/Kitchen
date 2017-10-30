// modules
import { RouterModule, Routes } from '@angular/router';

// components
import {DisplayDevicesComponent} from './display-devices/display-devices.component';
import {SettingsComponent} from './settings.component';
import {DisplayGroupsComponent} from './display-groups/display-groups.component';
import {DisplayProfilesComponent} from './display-profiles/display-profiles.component';

const appRoutes: Routes = [
  {
    path: 'settings',
    component: SettingsComponent,
    data: {title: 'Settings'},
    children: [
      {path: '', redirectTo: 'devices', pathMatch: 'full'},
      {path: 'devices', component: DisplayDevicesComponent},
      {path: 'groups', component: DisplayGroupsComponent},
      {path: 'profiles', component: DisplayProfilesComponent}
    ]
  }
];
export const settingsRoutingModule = RouterModule.forChild(appRoutes);
