import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { CommonModule } from '@angular/common';
import { HeroesComponent } from './heroes/heroes.component';
import { DetailHeroComponent } from './detail-hero/detail-hero.component';
import { FormsModule } from '@angular/forms';

const routesConfig: Routes = [
	{ path:'home', component: HomeComponent }
];

@NgModule({
	imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(routesConfig)
    ],
    declarations:[
        HomeComponent,
        HeroesComponent,
        DetailHeroComponent
    ]
})

export class HomeModule { }