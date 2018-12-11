import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-richtext-sample',
  template: `
<div class='app-box'>
  <p>Classic mode</p>
  <app-richtext mode='classic' class='wide-size'></app-richtext>

  <hr>
  <p>Document mode</p>
  <app-richtext mode='document' class='wide-size'></app-richtext>

</div>`
})
export class RichtextBasicSampleComponent {}
