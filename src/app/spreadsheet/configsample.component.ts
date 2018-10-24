import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-basic-sample',
  template: `
<div class='app-box'>
  <p>Pre-configured component</p>
  <app-spreadsheet-configured class='wide-size'></app-spreadsheet-configured>
</div>`
})
export class SpreadsheetConfigSampleComponent {
}
