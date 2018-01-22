import { Component,OnInit } from '@angular/core';
import {Router,ActivatedRoute,ParamMap} from '@angular/router'
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Observable } from 'rxjs/Observable';

@Component({
	selector: 'dashboard-detail-app',
	templateUrl: 'dashboard-detail.component.html',
	styleUrls: ['dashboard-detail.component.scss'],
	providers: [HeroService]
	
})
export class DashboardDetailComponent implements OnInit {
    hero$ :  Observable<Hero>;
	 constructor(private route:ActivatedRoute,private service:HeroService,private router: Router){

     }
	 ngOnInit(){
	  // this.hero =  this.route.paramMap.switchMap((params: ParamMap)=>this.service.getHero(params.get("id")));
	 
		this.route.paramMap.subscribe(
			(paramsMap:ParamMap) => {
				this.hero$ = this.service.getHero(paramsMap.get("id"));
			}
		)
		console.log(this.hero$);
	 }

	 backDashboard(hero:Hero){
		let heroId = hero ? hero.id : null;
		// Pass along the hero id if available
		// so that the HeroList component can select that hero.
		// Include a junk 'foo' property for fun.
		//this.router.navigate(['/heroes', { id: heroId, foo: 'foo' }]);
		this.router.navigate(['/home/dashboard']);

		//this.router.navigate(['../', { id: heroId, foo: 'foo' }], { relativeTo: this.route });
	 }
	
   
}
