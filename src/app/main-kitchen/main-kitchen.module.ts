// modules
import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgSlimScrollModule} from 'ngx-slimscroll';
import {
  MatButtonModule,
  MatDialogModule
} from '@angular/material';

// components
import {MainKitchenComponent} from './main-kitchen.component';
import {MainKitchenHeaderComponent} from './main-kitchen-header/main-kitchen-header.component';
import {MainKitchenSidebarComponent} from './main-kitchen-sidebar/main-kitchen-sidebar.component';
import {OrderMetaBarComponent} from './main-kitchen-order/order-meta-bar/order-meta-bar.component';
import {MainKitchenOrderComponent} from './main-kitchen-order/main-kitchen-order.component';
import {MainKitchenOrderItemComponent} from './main-kitchen-order/main-kitchen-order-item/main-kitchen-order-item.component';
import {BumpOrderComponent} from './dialogs/bump-order/bump-order.component';

import {RecallItemComponent} from './dialogs/recall-item/recall-item.component';
import {MarkAsDoneComponent} from './dialogs/mark-as-done/mark-as-done.component';
import {SnoozeOrderComponent} from './dialogs/snooze-order/snooze-order.component';
import {CompletedOrdersComponent} from './dialogs/completed-orders/completed-orders.component';
import {SnoozedOrdersComponent} from './dialogs/snoozed-orders/snoozed-orders.component';
import {OrderDetailsComponent} from './dialogs/order-details/order-details.component';

// pipes
import {CounterPipe} from './pipes/counter.pipe';
import {OrderByPipe} from './pipes/order-by.pipe';

// directives
import {ToogleDirective} from './directives/toogle.directive';

// services
import {CookieService} from 'ngx-cookie-service';

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    FormsModule,
    MatButtonModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    BrowserModule,
    NgSlimScrollModule,
    RouterModule
  ],
  declarations: [
    MainKitchenComponent,
    MainKitchenHeaderComponent,
    MainKitchenSidebarComponent,
    MainKitchenOrderComponent,
    OrderMetaBarComponent,
    MainKitchenOrderComponent,
    MainKitchenOrderItemComponent,
    CounterPipe,
    BumpOrderComponent,
    RecallItemComponent,
    MarkAsDoneComponent,
    SnoozeOrderComponent,
    OrderByPipe,
    CompletedOrdersComponent,
    SnoozedOrdersComponent,
    OrderDetailsComponent,
    ToogleDirective
  ],
  exports: [MainKitchenComponent],
  entryComponents: [
    BumpOrderComponent,
    RecallItemComponent,
    MarkAsDoneComponent,
    SnoozeOrderComponent,
    CompletedOrdersComponent,
    SnoozedOrdersComponent,
    OrderDetailsComponent
  ],
  providers: [CookieService]
})
export class MainKitchenModule {
}
