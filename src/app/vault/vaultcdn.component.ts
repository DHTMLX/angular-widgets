import { Component, ElementRef, EventEmitter, Input, OnDestroy, Output, ViewChild } from '@angular/core';
import fromCDN from 'from-cdn';

declare var dhx;

@Component({
  selector: 'app-vault-cdn',
  template: `<div #widget class='widget-box'></div>`
})
export class VaultCDNComponent implements OnDestroy {
  @ViewChild('widget', {static: true}) container: ElementRef;
  vault: any;
  wait: Promise<void>;

  @Output() ready: EventEmitter<any> = new EventEmitter();
  @Input() mode: string;
  @Input() target: string;
  @Input() toolbar: boolean;
  @Input() autosend: boolean;

  constructor() {
    this.wait = fromCDN([
      'https://cdn.dhtmlx.com/vault/3.0/vault.js',
      'https://cdn.dhtmlx.com/vault/3.0/vault.css'
    ]).then( () => {
      this.vault = new dhx.Vault(this.container.nativeElement, {
        mode: this.mode,
        uploader: {
          autosend: this.autosend,
          target: this.target
        },
        toolbar: this.toolbar
      });

      this.ready.emit({ vault: this.vault });
    });
  }

  ngOnDestroy() {
      this.vault.destructor();
  }
}
