import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-data-richtext-sample',
  template: `
<div class='app-box'>
  <p>HTML serialize</p>
  <app-richtext value='{{html}}' class='wide-size' (change)="updateHTML($event)"></app-richtext>
  <textarea readonly>{{html}}</textarea>

  <p>Markdown serialize</p>
  <app-richtext value='{{markdown}}' dataType='markdown' class='wide-size' (change)="updateMarkdown($event)"></app-richtext>
  <textarea readonly>{{markdown}}</textarea>
</div>`
})
export class RichtextDataSampleComponent  {
  @Input() html = '<h1>Meet DHTMLX Rich Text Editor!</h1><p>This demo will show you the main features of our highly customizable JavaScript rich text editor.</p><p>Type in any text here, apply text formatting and use the controls below to change the editor\'s look and feel and convert your text into HTML or markdown.</p> <p><strong><i>To learn more, read our </i></strong><a href="https://docs.dhtmlx.com/richtext/index.html" title="documentation"><strong><i>documentation</i></strong></a><strong><i> and check the </i></strong><a href="https://docs.dhtmlx.com/richtext/samples/" title="samples"><strong><i>samples</i></strong></a></p>';
  @Input() markdown = `# Meet DHTMLX Rich Text Editor!
This JavaScript rich text editor is highly customizable. It makes text editing quick and comfortable due to the inbuilt
set of handy formatting tools.
Besides, it will convert your text into HTML or Markdown in the blink of an eye. Another bonus of DHTMLX Rich Text is
its flexible configuration settings which allow you to fine-tune the look and feel of the editor without effort.
To learn more, read our [documentation](https://docs.dhtmlx.com/richtext/index.html) and check the [samples](https://docs.dhtmlx.com/richtext/samples/).`;
  updateMarkdown(value) {
    this.markdown = value;
  }
  updateHTML(value) {
    this.html = value;
  }
}
