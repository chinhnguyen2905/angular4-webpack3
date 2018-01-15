import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { HomeModule } from './home/home.module';
import { CommonModule } from '@angular/common';
import { ProductsModule } from './products/products.module';
import { ShopModule } from './shop/shop.module';
import { LoginComponent } from './login/login.conponent';
import { FormsModule } from '@angular/forms';
import { LoginModule } from './login/login.module';
import { ExamplesMaterialModule } from './example-material/example-material.module';
import { MaterialModule } from './material.module';
import { BPMNIOComponent } from './bpmnio/viewer/bpmnio.component';
import { OverlaysComponent } from './bpmnio/overlays/overlays.component';
import { PropertiesPanelComponent } from './bpmnio/properties-pannel/properties-panel.component';
import { ToDoListComponent } from './todolist/todolist.component';
import { ToDoItemComponent } from './todolist/todo-item/todo-item.component';


const routes: Routes = [
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: 'home', loadChildren:'./home/home.module#HomeModule'},
	{ path:'login', component: LoginComponent},
	{ path:'bpmnio',component:BPMNIOComponent},
	{ path:'todolist',component:ToDoListComponent},
	{ path:'**',component:PageNotFoundComponent}
	
];

@NgModule({
	imports: [
		CommonModule,
		HomeModule,
		ProductsModule,
		ExamplesMaterialModule,
		FormsModule,
		ShopModule,
		LoginModule,
		MaterialModule,
		RouterModule.forRoot(routes)
	],
	declarations:[
					PageNotFoundComponent,
					BPMNIOComponent,
					OverlaysComponent,
					PropertiesPanelComponent,
					ToDoListComponent,
					ToDoItemComponent
				],
	exports: [RouterModule]
})

export class AppRoutingModule { }
