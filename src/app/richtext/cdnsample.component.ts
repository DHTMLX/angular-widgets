import { Component } from '@angular/core';

@Component({
  selector: 'app-cdn-sample',
  template: `
<div class='app-box'>
  <p>Code for richtext on this page is loaded through CDN on demand</p>
  <p>You can use promise or event to catch the moment when UI is ready to load the data</p>

  <app-richtext-cdn class='wide-size'></app-richtext-cdn>

</div>`
})
export class RichtextCDNSampleComponent {}
