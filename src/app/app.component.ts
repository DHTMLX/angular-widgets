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
export class AppComponent implements OnInit {
  @ViewChild('appcontent', {static: true}) container: ElementRef;

  constructor(private meta: Meta, private titleService: Title, private router: Router) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        if (window.location.pathname.substr(1).length > 0) {
          this.meta.updateTag({name: 'title', content: `DHX ${window.location.pathname.substr(1)}-angular`})
          this.meta.updateTag({name: 'description', content: `How to use DHTMLx ${window.location.pathname.substr(1)} with angular`})
          this.titleService.setTitle( `DHX ${window.location.pathname.substr(1)}-angular`);
        } else {
          this.titleService.setTitle( 'DHX Angular' );
          this.meta.addTag({ name: 'title', content: 'DHX Angular' });
          this.meta.addTag({ name: 'description', content: 'How to use DHTMLx suite with angular'})
        }
      }
   });
  }

  activeExample: string
  activeSidebarLink: string
  aciveHeadersLinks = {
    calendar: ['basic', 'cdn', 'configured']
  }

  ngOnInit(){
    this.activeSidebarLink = window.location.pathname.substr(1)
  }

  ngAfterContentInit() {
    if (window.location.hash && this.container.nativeElement) {
      const containerToScroll = this.container.nativeElement.querySelector(window.location.hash);
      if (containerToScroll) {
        const scrollPosition = containerToScroll.offsetTop
        this.container.nativeElement.scrollTo({
          top: scrollPosition - 57,
          behavior: 'smooth',
          inline: 'center',
        })
      }
    }
  }
  ngAfterViewChecked() {
    window.location.hash && this.setActiveStateForExample(window.location.hash.substring(1))
  }
  setActiveStateForExample(id) {
    console.log('fucking remove')
    this.activeSidebarLink && this.aciveHeadersLinks[this.activeSidebarLink].map(item => {
      if(item === id) {
        this.container.nativeElement.querySelector('#' + item) && this.container.nativeElement.querySelector('#' + item).classList.add('active')
      } else {
        this.container.nativeElement.querySelector('#' + item) && this.container.nativeElement.querySelector('#' + item).classList.remove('active')
      }
    })
  }
  getActiveWidget(widget: string) {
    this.activeSidebarLink = widget.split('-')[0]
  }
  getActiveExample(id: string) {
    const scrollPosition = this.container.nativeElement && this.container.nativeElement.querySelector('#' + id.split('_')[0]).offsetTop
    this.container.nativeElement.scrollTo({
      top: scrollPosition - 57,
      behavior: 'smooth',
      inline: 'center',
    })
    this.setActiveStateForExample(id.split('_')[0])
    history.pushState(null, null, window.location.pathname +'#' + id.split('_')[0])
  }
}
