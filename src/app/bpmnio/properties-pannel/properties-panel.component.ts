
import { Component,OnInit } from '@angular/core';
import { Http } from '@angular/http';
import  "bpmn-js/assets/bpmn-font/css/bpmn-embedded.css";
import "diagram-js/assets/diagram-js.css";
import { Event } from '_debugger';

const bpmn = require("bpmn-js");
const debounce = require('bpmn-js-properties-panel/node_modules/lodash/function/debounce');
var $ = require('jquery'),
   BpmnModeler = require('bpmn-js/lib/Modeler');

var propertiesPanelModule = require('bpmn-js-properties-panel'),
    propertiesProviderModule = require('bpmn-js-properties-panel/lib/provider/camunda'),
    camundaModdleDescriptor = require('camunda-bpmn-moddle/resources/camunda.json');

var container = $('#js-drop-zone');

var canvas = $('#js-canvas');


@Component({
	selector: 'properties-panel-app',
	templateUrl: 'properties-panel.component.html',
	styleUrls: ['properties-panel.component.scss']
})
export class PropertiesPanelComponent implements OnInit {
    bpmnModeler: any;
     constructor(private http:Http){
       
     }
     ngOnInit(){
         this.bpmnModeler = new BpmnModeler({
            container: '#js-canvas',
             width: '100%',
             height: '600px',
            propertiesPanel: {
              parent: '#js-properties-panel'
            },
            additionalModules: [
              propertiesPanelModule,
              propertiesProviderModule
            ],
            moddleExtensions: {
              camunda: camundaModdleDescriptor
            }
          });
        this.loadDiagramBPMN();

        //for save download
       // const exportArtifacts = debounce(this.downloadSaveHandler,500);
       
       // this.bpmnModeler.on('commandStack.changed', exportArtifacts);
       // console.log(this.bpmnModeler);
     }
    saveSVG(done:any) {
      this.bpmnModeler.saveSVG(done);
    }
    
     saveDiagram(done:any) {
    
      this.bpmnModeler.saveXML({ format: true }, function(err:any, xml:any) {
        done(err, xml);
      });
    }

     downloadSaveHandler(){
        console.log("debounce");
        var downloadLink = $('#js-download-diagram');
        var downloadSvgLink = $('#js-download-svg');
        
        this.saveSVG((err:any, svg:any) => this.setEncoded(downloadSvgLink, 'diagram.svg', err ? null : svg)
          );
    
        this.saveDiagram(function(err:any, xml:any) {
          this.setEncoded(downloadLink, 'diagram.bpmn', err ? null : xml);
        });
     }

     handleError(err: any) {
        if (err) {
            container
              .removeClass('with-diagram')
              .addClass('with-error');
      
            container.find('.error pre').text(err.message);
      
            console.error(err);
          } else {
            container
              .removeClass('with-error')
              .addClass('with-diagram');
          }
    }

    loadDiagramBPMN() {
        const url = './public/diagrams/newDiagram.bpmn';
        this.http.get(url)
            .toPromise()
            .then(response => response.text())
            .then(data => this.bpmnModeler.importXML(data, this.handleError))
            .catch(this.handleError);
    }

     

    saveFile(e:any){
      e.preventDefault();
      e.stopPropagation();
    }

    download(e:any){
      e.preventDefault();
      e.stopPropagation();
    }

    setEncoded(link:any, name:any, data:any) {
      var encodedData = encodeURIComponent(data);
  
      if (data) {
        link.addClass('active').attr({
          'href': 'data:application/bpmn20-xml;charset=UTF-8,' + encodedData,
          'download': name
        });
      } else {
        link.removeClass('active');
      }
    }
    
   
  
    
}
