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
  @Input() activeWidget: string;
  @Input() activeExample: string;
  @Input() headerAncors: [];

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

  ngOnInit(){
    // this.activeSidebarLink = window.location.pathname.substr(1)
  }

  ngAfterContentInit() {
    console.log('ng Ater Init');
    if (window.location.hash && this.container.nativeElement) {
      const containerToScroll = document.querySelector('#cdn');
      console.log('object', containerToScroll)
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

  // setActiveStateForExample(id) {
  //   this.activeSidebarLink && this.aciveHeadersLinks[this.activeSidebarLink].map(item => {
  //     if(item === id) {
  //       this.container.nativeElement.querySelector('#' + item) && this.container.nativeElement.querySelector('#' + item).classList.add('active')
  //     } else {
  //       this.container.nativeElement.querySelector('#' + item) && this.container.nativeElement.querySelector('#' + item).classList.remove('active')
  //     }
  //   })
  // }
  // getActiveWidget(widget: string) {
  //   this.activeSidebarLink = widget.split('-')[0]
  // }
  // getActiveExample(id: string) {
  //   const scrollPosition = this.container.nativeElement && this.container.nativeElement.querySelector('#' + id.split('_')[0]).offsetTop
  //   this.container.nativeElement.scrollTo({
  //     top: scrollPosition - 57,
  //     behavior: 'smooth',
  //     inline: 'center',
  //   })
  //   this.setActiveStateForExample(id.split('_')[0])
  //   history.pushState(null, null, window.location.pathname +'#' + id.split('_')[0])
  // }
}
