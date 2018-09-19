import { Component, ElementRef, Input, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Vault, DataCollection, VaultMode, IFileWrapper } from 'dhx-vault';

@Component({
  selector: 'app-vault-configured',
  template: `<div #widget class='widget-box'></div>`
})
export class VaultConfiguredComponent implements OnInit, OnDestroy {
  @ViewChild('widget') container: ElementRef;
  vault: Vault;

  ngOnInit() {
    this.vault = new Vault(this.container.nativeElement, {
      mode: VaultMode.grid
    });

    this.vault.data.parse([
      { name: 'myfile_12.png', size: 32420 },
      { name: 'myfile_13.png', size: 55674 },
      { name: 'myfile_14.png', size: 12440 },
      { name: 'info.doc', size: 243441 },
    ]);

    this.vault.toolbar.data.add({
      value: 'MyAction'
    });
  }

  ngOnDestroy() {
      this.vault.destructor();
  }
}
