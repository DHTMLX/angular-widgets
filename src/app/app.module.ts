import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AppToolbarComponent } from './appToolbar/appToolbar.component';
import { AppSidebarComponent } from './appSidebar/appSidebar.component';

import { CalendarPage } from './calendar/calendarPage.component'
import { CalendarBaseComponent} from './calendar/calendarBase.component'
import { CalendarCdnComponent } from './calendar/calendarCdn.component'
import { CalendarConfiguredComponent } from './calendar/calendarConfigured.component'

import { VaultComponent } from './vault/vault.component';
import { VaultConfiguredComponent } from './vault/vaultconfigured.component';
import { VaultCDNComponent } from './vault/vaultcdn.component';

import { BasicSampleComponent } from './vault/basicsample.component';
import { CDNSampleComponent } from './vault/cdnsample.component';
import { DataSampleComponent } from './vault/datasample.component';
import { ConfigSampleComponent } from './vault/configsample.component';

import {SpreadsheetComponent} from './spreadsheet/spreadsheet.component';
import {SpreadsheetCDNComponent} from './spreadsheet/spreadsheetcdn.component';
import {SpreadsheetConfiguredComponent} from './spreadsheet/spreadsheetconfigured.component';

import { SpreadsheetBasicSampleComponent } from './spreadsheet/basicsample.component';
import { SpreadsheetCDNSampleComponent } from './spreadsheet/cdnsample.component';
import { SpreadsheetDataSampleComponent } from './spreadsheet/datasample.component';
import { SpreadsheetConfigSampleComponent } from './spreadsheet/configsample.component';



const appRoutes: Routes = [
  { path: 'calendar', component: CalendarPage },
];

@NgModule({
  declarations: [
    AppComponent,
    AppToolbarComponent,
    AppSidebarComponent,

    CalendarPage,
    CalendarBaseComponent,
    CalendarCdnComponent,
    CalendarConfiguredComponent,

    VaultComponent,
    VaultConfiguredComponent,
    VaultCDNComponent,

    BasicSampleComponent,
    CDNSampleComponent,
    DataSampleComponent,
    ConfigSampleComponent,

    SpreadsheetComponent,
    SpreadsheetCDNComponent,
    SpreadsheetConfiguredComponent,
    SpreadsheetBasicSampleComponent,
    SpreadsheetCDNSampleComponent,
    SpreadsheetDataSampleComponent,
    SpreadsheetConfigSampleComponent,
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    BrowserModule
  ],
  providers: [
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
