import { Component,OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'expand-panel-app',
	templateUrl: 'expand-panel.component.html',
    styleUrls: ['expand-panel.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ExpandPanelComponent {
    step = -1;
     constructor(){

     }
     ngOnInit(){

    }
   

    setStep(index: number) {
      this.step = index;
    }
  
    nextStep() {
      this.step++;
    }
  
    prevStep() {
      this.step--;
    }
}
