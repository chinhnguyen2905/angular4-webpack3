import { Component,OnInit } from '@angular/core';

import { Http } from '@angular/http';
const BpmnViewer = require('bpmn-js/lib/NavigatedViewer');
import 'bpmn-js';
@Component({
	selector: 'overlays-bpmn-app',
	templateUrl: 'overlays.component.html',
	styleUrls: ['overlays.component.scss']
})
export class OverlaysComponent implements OnInit {
	 bpmnViewer: any;
	
	 constructor(private http:Http){}

	 ngOnInit(){
		this.bpmnViewer = new BpmnViewer({container: '#canvas',
		overlays: {
			defaults: {
			  show: { minZoom: 1 },
			  scale: true
			}
		  }});
		this.loadSampleOverlaysBPMN();
	 }

	 loadSampleOverlaysBPMN(){
		const url = './public/diagrams/qr-code.bpmn';
        this.http.get(url)
            .toPromise()
            .then(response => response.text())
            .then(data => {
				this.bpmnViewer.importXML(data, this.handleError);
				//console.log(this.bpmnViewer);
				this.settingValues();
			})
            .catch(this.handleError);
	 }

	 handleError(err: object) {
		console.log('err:'+ err);
        if (err) {
			console.log('error rendering', err);
        } else {
			console.log('rendered overlays');
		}
	}
	
	settingValues(){
		var  canvas = this.bpmnViewer.get('canvas');
		var overlays = this.bpmnViewer.get('overlays');
		console.log('overlays:', overlays);
		// zoom to fit full viewport
		canvas.zoom('fit-viewport');
		 // add a pink badge on the top left of the shape
	//var ele = 	overlay.get('SCAN_OK');
		//console.log(ele)
		overlays.add('SCAN_OK', 'note', {
			position: {
			bottom: 0,
			right: 0
			},
			html: '<div class="diagram-note">Mixed up the labels?</div>'
		});
		// attach an overlay to a node
	/*	overlays.add('SCAN_OK', 'note', {
			position: {
			bottom: 0,
			right: 0
			},
			html: '<div class="diagram-note">Mixed up the labels?</div>'
		});*/

		// configure scale=false to use non-scaling overlays
	/*	overlays.add('START_PROCESS', 'note', {
			position: {
			bottom: 0,
			right: 0
			},
			scale: false,
			html: '<div class="diagram-note">I don\'t scale</div>'
		});

		// configure scale={ min: 1 } to use non-shrinking overlays
		overlays.add('SCAN_QR_CODE', 'note', {
			position: {
			bottom: 0,
			right: 0
			},
			scale: { min: 1 },
			html: '<div class="diagram-note">I don\'t shrink beyond 100%</div>'
		});



		// configure show={ minZoom: 0.6 } to hide overlays at low zoom levels
		overlays.add('END_PROCESS', 'note', {
			position: {
			bottom: 0,
			right: 0
			},
			show: {
			minZoom: 0.7
			},
			html: '<div class="diagram-note">I hide at low zoom levels</div>'
		});*/
	}

}
