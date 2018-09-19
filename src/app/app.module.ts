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

const appRoutes: Routes = [
  { path: 'basic', component: BasicSampleComponent },
  { path: 'cdn', component: CDNSampleComponent },
  { path: 'data', component: DataSampleComponent },
  { path: 'config', component: ConfigSampleComponent },
  { path: '',
    redirectTo: '/basic',
    pathMatch: 'full'
  }
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
    ConfigSampleComponent
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
