import { Component, ElementRef, Input, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Spreadsheet } from 'dhx-spreadsheet';

@Component({
  selector: 'app-spreadsheet',
  template: `<div #widget class='widget-box-wide'></div>`
})
export class SpreadsheetComponent implements OnInit, OnDestroy {
  @ViewChild('widget') container: ElementRef;
  spreadsheet: Spreadsheet;

  @Input() toolbar: string[];
  @Input() menu: boolean;
  @Input() editLine: boolean;
  @Input() rowsCount: number;
  @Input() colsCount: number;


  ngOnInit() {
    this.spreadsheet = new Spreadsheet(this.container.nativeElement, {
      toolbar: this.toolbar,
      menu: this.menu,
      editLine: this.editLine,
      rowsCount: this.rowsCount,
      colsCount: this.colsCount,
    });
  }

  ngOnDestroy() {
    this.spreadsheet.destructor();
  }
}
