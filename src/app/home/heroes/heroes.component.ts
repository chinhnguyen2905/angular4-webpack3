import { Component,OnInit } from '@angular/core';
import { HEROES } from '../data-heroes';
import { Hero } from '../hero';

@Component({
	selector: 'app-heroes',
	templateUrl: 'heroes.component.html',
	styleUrls: ['heroes.component.scss']
})
export class HeroesComponent implements OnInit {
    heroes = HEROES;
    selectedHero: Hero;
     constructor(){
        
     }

     ngOnInit(){

     }
     onClick(hero:Hero){
        this.selectedHero = hero;
     }
}
