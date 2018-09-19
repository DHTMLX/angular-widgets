import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { VaultCDNComponent } from './vaultcdn.component';

@Component({
  selector: 'app-basic-sample',
  template: `
<div class='app-box'>
  <p>Code for vaults on this page is loaded through CDN on demand</p>
  <p>You can use promise or event to catch the moment when UI is ready to load the data</p>

  <app-vault-cdn (ready)="loadData($event)" toolbar mode="grid" class='base-size'></app-vault-cdn>
  <br>
  <app-vault-cdn #files toolbar='true' mode="list" class='base-size'></app-vault-cdn>

</div>`
})
export class CDNSampleComponent implements OnInit {
  @ViewChild('files') files: VaultCDNComponent;

  ngOnInit() {
    const sub = this.files;
    sub.wait.then(() => {
      sub.vault.data.add({
        name: '"By-API.png', size: 12000
      });
    });
  }

  loadData(ev: any) {
      ev.vault.data.add({
        name: 'By-Event.md', size: 44800
      });
  }
}
