import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Hero } from './hero';
import { HEROES } from './data-heroes';
import { of } from 'rxjs/observable/of';

@Injectable()

export class HeroService {
    constructor(){}
    getHeroes(): Observable<Hero[]>{
        return Observable.of(HEROES);
    }
    getHero(id:Number |  String):  Observable<Hero>{
       const herroArr = HEROES;
       for(var i= 0; i< herroArr.length; i++){
           if(herroArr[i].id == id){

             const hero = Observable.of(herroArr[i]);
             console.log("HERO"+JSON.stringify(hero));
            return hero;
            
           }
       }
    }
}