// modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { MainKitchenModule } from './main-kitchen/main-kitchen.module';
import {SettingsModule} from './settings/settings.module';

// components
import { AppComponent } from './app.component';

// routing
import {appRouting, appRoutingProviders} from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    MainKitchenModule,
    SettingsModule,
    RouterModule,
    appRouting
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule {}
