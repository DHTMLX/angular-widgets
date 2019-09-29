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
import { CalendarParent } from './calendar/calendarConfigurableWithDerectives/calendarParent.component'
import { CalendarChild } from './calendar/calendarConfigurableWithDerectives/calendarChild.component'
import { CalendarEventsComponent } from './calendar/calendarEvents.components';

import { ListPage } from './list/listPage.component'
import { ListBaseComponent} from './list/listBase.component'
import { ListCdnComponent } from './list/listCdn.component'
import { ListConfiguredComponent } from './list/listConfigured.component'
import { ListEventsComponent } from './list/ListEvents.components';
import { ListDataComponent } from './list/ListData.components';
import { ListParent } from './list/listConfigurableWithDerectives/listParent.component'
import { ListChild } from './list/listConfigurableWithDerectives/listChild.component'

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
  { path: 'list', component: ListPage },
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
    CalendarEventsComponent,
    CalendarChild,
    CalendarParent,

    ListPage,
    ListBaseComponent,
    ListCdnComponent,
    ListConfiguredComponent,
    ListEventsComponent,
    ListDataComponent,
    ListParent,
    ListChild,

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
      appRoutes,
    ),
    BrowserModule
  ],
  providers: [
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
