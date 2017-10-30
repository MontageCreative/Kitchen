// modules
import { RouterModule, Routes } from '@angular/router';

// components
import {MainKitchenComponent} from './main-kitchen/main-kitchen.component';

const appRoutes: Routes = [
  { path: '', component: MainKitchenComponent, data: {title: 'Main Kitchen'}},
];

export const appRoutingProviders: any[] = [];

export const appRouting = RouterModule.forRoot(appRoutes);
