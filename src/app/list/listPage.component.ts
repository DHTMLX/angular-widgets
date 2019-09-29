import { Component } from '@angular/core';

@Component({
  selector: 'list-page',
  template: `
	<main>
		<section class="hgroup active" id="basic">
			<h3>
				NPM basic inintialization 
				<a href="#basic" class="anchor">
					<img src="/static/link.svg" alt="" />
				</a>
			</h3>
			<p>
				<a href="https://github.com/DHTMLX/angular-widgets/blob/master/src/app/list/listBase.component.ts" target="_blank"  rel="noopener noreferrer" >Code example </a> 
			</p>
			<div>
				<list-base></list-base>
			</div>
		</section>
		<section class="hgroup" id="cdn">
			<h3>
				CDN basic inintialization 
				<a href="#cdn" class="anchor">
					<img src="/static/link.svg" alt="" />
				</a>
			</h3>
			<p>
				<a href="https://github.com/DHTMLX/angular-widgets/blob/master/src/app/list/listCdn.component.ts" target="_blank"  rel="noopener noreferrer" >Code example </a> 
			</p>
			<div>
				<list-cdn></list-cdn>
			</div>
		</section>
		<section class="hgroup" id="configured">
			<h3>
				Configured component
				<a href="#configured" class="anchor">
					<img src="/static/link.svg" alt="" />
				</a>
			</h3>
			<p>
				<a href="https://github.com/DHTMLX/angular-widgets/blob/master/src/app/list/listConfigured.component.ts" target="_blank"  rel="noopener noreferrer" >Code example </a> 
			</p>
			<div>
				<list-configured></list-configured>
			</div>
		</section>
		<section class="hgroup" id="configurable">
			<h3>
				Configurable with derectives
				<a href="#configurable" class="anchor">
					<img src="/static/link.svg" alt="" />
				</a>
			</h3>
			<p>
				<a href="https://github.com/DHTMLX/angular-widgets/blob/master/src/app/list/listConfigured.component.ts" target="_blank"  rel="noopener noreferrer" >Code example </a> 
			</p>
			<div>
				<list-parent></list-parent>
			</div>
		</section>
		<section class="hgroup" id="events">
			<h3>
				Component events
				<a href="#events" class="anchor">
					<img src="/static/link.svg" alt="" />
				</a>
			</h3>
			<p>
				<a href="https://github.com/DHTMLX/angular-widgets/blob/master/src/app/list/listConfigured.component.ts" target="_blank"  rel="noopener noreferrer" >Code example </a> 
			</p>
			<div>
				<list-events></list-events>
			</div>
		</section>
		<section class="hgroup" id="data">
			<h3>
				Work with data
				<a href="#data" class="anchor">
					<img src="/static/link.svg" alt="" />
				</a>
			</h3>
			<p>
				<a href="https://github.com/DHTMLX/angular-widgets/blob/master/src/app/list/listConfigured.component.ts" target="_blank"  rel="noopener noreferrer" >Code example </a> 
			</p>
			<div>
				<list-data></list-data>
			</div>
		</section>
	<main>`
})
export class ListPage {}
