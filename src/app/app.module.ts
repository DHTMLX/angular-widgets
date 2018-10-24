import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { VaultComponent } from './vault/vault.component';
import { VaultConfiguredComponent } from './vault/vaultconfigured.component';
import { VaultCDNComponent } from './vault/vaultcdn.component';

import { BasicSampleComponent } from './vault/basicsample.component';
import { CDNSampleComponent } from './vault/cdnsample.component';
import { DataSampleComponent } from './vault/datasample.component';
import { ConfigSampleComponent } from './vault/configsample.component';

import {SpreadsheetComponent} from "./spreadsheet/spreadsheet.component";
import {SpreadsheetCDNComponent} from "./spreadsheet/spreadsheetcdn.component";
import {SpreadsheetConfiguredComponent} from "./spreadsheet/spreadsheetconfigured.component";

import { SpreadsheetBasicSampleComponent } from './spreadsheet/basicsample.component';
import { SpreadsheetCDNSampleComponent } from './spreadsheet/cdnsample.component';
import { SpreadsheetDataSampleComponent } from './spreadsheet/datasample.component';
import { SpreadsheetConfigSampleComponent } from './spreadsheet/configsample.component';

const appRoutes: Routes = [
  { path: 'basic', component: BasicSampleComponent },
  { path: 'cdn', component: CDNSampleComponent },
  { path: 'data', component: DataSampleComponent },
  { path: 'config', component: ConfigSampleComponent },
  { path: '',
  redirectTo: '/basic',
  pathMatch: 'full'
  },
  { path: 'spreadsheet',
  redirectTo: 'spreadsheet/basic',
  pathMatch: 'full'
  },
  { path: 'spreadsheet/basic', component: SpreadsheetBasicSampleComponent },
  { path: 'spreadsheet/cdn', component: SpreadsheetCDNSampleComponent },
  { path: 'spreadsheet/data', component: SpreadsheetDataSampleComponent },
  { path: 'spreadsheet/config', component: SpreadsheetConfigSampleComponent }
];

@NgModule({
  declarations: [
    AppComponent,

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
    SpreadsheetConfigSampleComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
