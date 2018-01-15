import { Component,OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'bpmn-js';
import { HttpClient } from '@angular/common/http';


const bpmn = require("bpmn-js");

@Component({
	selector: 'bpmnio-app',
	templateUrl: 'bpmnio.component.html',
	styleUrls: ['bpmnio.component.scss']
})
export class BPMNIOComponent implements OnInit {
    viewer: any;
     constructor(private http:Http){
       
     }
     ngOnInit(){
        this.viewer = new bpmn({container: '#canvas'});
        this.loadSampleBPMN();
     }

     handleError(err: any) {
        if (err) {
            console.log('error rendering', err);
        } else {
            console.log('rendered');
        }
    }

    loadSampleBPMN() {
        const url = './public/diagrams/pizza-collaboration.bpmn';
        this.http.get(url)
            .toPromise()
            .then(response => response.text())
            .then(data => this.viewer.importXML(data, this.handleError))
            .catch(this.handleError);
    }
}
