import { Component, ViewChild } from '@angular/core';
import { SpreadsheetCDNComponent } from './spreadsheetcdn.component';

@Component({
  selector: 'app-cdn-sample',
  template: `
<div class='app-box'>
  <p>Code for spreadsheet on this page is loaded through CDN on demand</p>
  <p>You can use promise or event to catch the moment when UI is ready to load the data</p>

  <app-spreadsheet-cdn (ready)="loadData($event)" class='wide-size'></app-spreadsheet-cdn>

</div>`
})
export class SpreadsheetCDNSampleComponent {
  @ViewChild('files') files: SpreadsheetCDNComponent;

  loadData(ev: any) {
	  ev.spreadsheet.parse([
		  {
			  cell:"A1",
			  value:10
		  }
	  ])
  }
}
