import { Component,OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';


@Component({
	selector: 'dashboard-list-app',
	templateUrl: 'dashboard-list.component.html',
    styleUrls: ['dashboard-list.component.scss'],
    providers:[HeroService]
})
export class DashboardListComponent implements OnInit {
    heroes: Hero[] = [];
	 constructor(private heroService:HeroService){

     }
	 ngOnInit(){
        this.getHeroes();
     }
     getHeroes(){
         this.heroService.getHeroes()
         /// .subscribe(heroes => this.heroes = heroes.slice(1,5));
         .subscribe(heroes => this.heroes = heroes);
     }
   
}
