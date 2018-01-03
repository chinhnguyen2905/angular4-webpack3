import { Component,Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
	selector: 'detail-hero-app',
	templateUrl: 'detail-hero.component.html',
	styleUrls: ['detail-hero.component.scss']
})
export class DetailHeroComponent {
    @Input() hero: Hero;
     constructor(){}
     ngOnInit(){

     }
}
