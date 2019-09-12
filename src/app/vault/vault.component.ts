import { Component, ElementRef, Input, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Vault, DataCollection, VaultMode, IFileWrapper } from 'dhx-vault';

@Component({
  selector: 'app-vault',
  template: `<div #widget class='widget-box'></div>`
})
export class VaultComponent implements OnInit, OnDestroy {
  @ViewChild('widget', {static: true}) container: ElementRef;
  vault: Vault;

  @Input() mode: string;
  @Input() target: string;
  @Input() toolbar: boolean;
  @Input() autosend: boolean;
  @Input() data: DataCollection<IFileWrapper>;


  ngOnInit() {
    this.vault = new Vault(this.container.nativeElement, {
      data: this.data,
      mode: VaultMode.grid,
      uploader: {
        autosend: this.autosend,
        target: this.target
      },
      toolbar: this.toolbar
    });
  }

  ngOnDestroy() {
      this.vault.destructor();
  }
}
