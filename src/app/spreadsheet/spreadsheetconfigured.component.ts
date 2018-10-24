import { Component, ElementRef, Input, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Spreadsheet } from 'dhx-spreadsheet';

@Component({
  selector: 'app-spreadsheet-configured',
  template: `<div #widget class='widget-box-wide'></div>`
})
export class SpreadsheetConfiguredComponent implements OnInit, OnDestroy {
  @ViewChild('widget') container: ElementRef;
  spreadsheet: Spreadsheet;

  @Input() toolbar: string[];
  @Input() menu: boolean;
  @Input() editLine: boolean;
  @Input() rowsCount: number;
  @Input() colsCount: number;


  ngOnInit() {
    this.spreadsheet = new Spreadsheet(this.container.nativeElement, {
      editLine: false
    });
    this.spreadsheet.parse([
      { cell: "A1", value: 10 },
      { cell: "B1", value: 20 }
    ]);

    this.spreadsheet.setStyle("A1", { background: "#F4D679" });
  }

  ngOnDestroy() {
    this.spreadsheet.destructor();
  }
}
