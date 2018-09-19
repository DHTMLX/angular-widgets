import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-basic-sample',
  template: `
<div class='app-box'>
  <p>Basic vault</p>
  <app-vault toolbar='true' autosend='true' class='base-size'></app-vault>

  <hr>
  <p>Vault without toolbar</p>
  <app-vault autosend='true' class='base-size'></app-vault>

  <hr>
  <p>Grid mode without auto-send</p>
  <app-vault toolbar='true' mode='grid' class='base-size'></app-vault>

</div>`
})
export class BasicSampleComponent {
}
