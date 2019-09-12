import { Component, ElementRef, EventEmitter, Input, OnDestroy, Output, ViewChild } from '@angular/core';
import fromCDN from 'from-cdn';

declare var dhx;

@Component({
  selector: 'app-spreadsheet-cdn',
  template: `<div #widget class='widget-box-wide'></div>`
})
export class SpreadsheetCDNComponent implements OnDestroy {
  @ViewChild('widget', {static: true}) container: ElementRef;
  spreadsheet: any;
  wait: Promise<void>;

  @Output() ready: EventEmitter<any> = new EventEmitter();
  @Input() toolbar: string[];
  @Input() menu: boolean;
  @Input() editLine: boolean;
  @Input() rowsCount: number;
  @Input() colsCount: number;

  constructor() {
    this.wait = fromCDN([
      'https://cdn.dhtmlx.com/spreadsheet/3.0/spreadsheet.js',
      'https://cdn.dhtmlx.com/spreadsheet/3.0/spreadsheet.css'
    ]).then(() => {
      this.spreadsheet = new dhx.Spreadsheet(this.container.nativeElement, {
        toolbar: this.toolbar,
        menu: this.menu,
        editLine: this.editLine,
        rowsCount: this.rowsCount,
        colsCount: this.colsCount,
      });

      this.ready.emit({ spreadsheet: this.spreadsheet });
    });
  }

  ngOnDestroy() {
    this.spreadsheet.destructor();
  }
}
