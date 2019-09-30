import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router, NavigationEnd, Event, } from '@angular/router';

export interface Todo {
  title: string
  activeSidebarLink?: string;
}



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  @Input() activeWidget: string;
  @Input() activeExample: string;

  constructor(private meta: Meta, private titleService: Title, private router: Router) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.activeWidget = event.url.split('#')[0] && event.url.split('#')[0].substring(1)
        this.activeExample = event.url.split('#')[1] && event.url.split('#')[1]
        if (this.activeWidget.length > 0) {
          this.meta.updateTag({name: 'title', content: `DHX ${this.activeWidget}-angular`})
          this.meta.updateTag({name: 'description', content: `How to use DHTMLx ${this.activeWidget} with angular`})
          this.titleService.setTitle( `DHX ${this.activeWidget}-angular`);
        } else {
          this.titleService.setTitle( 'DHX Angular' );
          this.meta.addTag({ name: 'title', content: 'DHX Angular' });
          this.meta.addTag({ name: 'description', content: 'How to use DHTMLx suite with angular'})
        }
      }
   });
  }
}
