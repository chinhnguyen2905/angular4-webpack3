import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HeroesComponent } from './heroes/heroes.component';
import { DetailHeroComponent } from './detail-hero/detail-hero.component';
import { FormsModule } from '@angular/forms';
import { DashboardListComponent } from './dashboard/dashboard-list.component';
import { DashboardDetailComponent } from './dashboard/dashboard-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
    { path: 'home',
      component: HomeComponent,
      children : [
        { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
        { path: 'dashboard',
          component: DashboardComponent,
          children:[
            { path:'', component: DashboardListComponent},
            { path:'detail/:id',  component: DashboardDetailComponent}
         ]},
        { path: "heroes", component: HeroesComponent }  
      ]
    }
];

@NgModule({
	imports: [
        CommonModule,
        FormsModule,
		RouterModule.forChild(routes),
	],
	declarations:[
                    HomeComponent,
                    HeroesComponent,
                    DetailHeroComponent,
                    DashboardComponent,
                    DashboardListComponent,
                    DashboardDetailComponent
        ],
	exports: [RouterModule]
})

export class HomeRoutingModule { }
