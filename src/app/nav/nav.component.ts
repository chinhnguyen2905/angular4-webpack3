import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { ElementRef } from '@angular/core/src/linker/element_ref';

@Component({
	selector: 'navmenu',
	templateUrl: 'nav.component.html',
	styleUrls: ['nav.component.scss']
	
})
export class NavComponent {
	OnAuthorizedPermission(element: ElementRef) {
	element.nativeElement.style.visibility ="inherit";
	}

	OnUnauthorizedPermission(element: ElementRef) {
	element.nativeElement.style.cursor = "not-allowed";    
	element.nativeElement.style.opacity = "0.5";    
	// element.nativeElement.style.visibility = "hidden";    
	}
}
