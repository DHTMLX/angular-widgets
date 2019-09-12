import { Component, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-data-sample',
  template: `
<div class='app-box'>
  <p>Data and events</p>
  <app-spreadsheet #spreadsheet class='wide-size'></app-spreadsheet>
  <hr>
  <div class='line'>
    {{event}}
  </div>
  <div class='line'>
    <input type="button" (click)="parseData()" value="Parse data">
    <input type="button" (click)="clearAll()" value="Clear all">
  </div>
</div>`
})
export class SpreadsheetDataSampleComponent implements AfterViewInit {
  event: string;
  @ViewChild('spreadsheet', {static: true}) spreadsheet;
  constructor(private cd: ChangeDetectorRef) {
  }
  ngAfterViewInit() {
    this.spreadsheet.spreadsheet.events.on("afterValueChange", (cell, value) => {
      this.event = `Value in cell ${cell} changed to ${value}`;
      this.cd.detectChanges();
    });
    this.spreadsheet.spreadsheet.setValue("A1", 10);
  }
  clearAll() {
    this.spreadsheet.spreadsheet.parse([]);
    this.event = "";
  }
  parseData() {
    this.spreadsheet.spreadsheet.parse([
      { cell: "A1", value: 1000 },
      { cell: "B1", value: 5300 },
      { cell: "C1", value: 2900 },
    ]);
  }
}
