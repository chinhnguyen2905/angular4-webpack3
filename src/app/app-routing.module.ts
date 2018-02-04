import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { HomeModule } from './home/home.module';
import { CommonModule } from '@angular/common';
import { ProductsModule } from './products/products.module';
import { ShopModule } from './shop/shop.module';
import { LoginComponent } from './login/login.conponent';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginModule } from './login/login.module';
import { ExamplesMaterialModule } from './example-material/example-material.module';
import { MaterialModule } from './material.module';
import { BPMNIOComponent } from './bpmnio/viewer/bpmnio.component';
import { OverlaysComponent } from './bpmnio/overlays/overlays.component';
import { PropertiesPanelComponent } from './bpmnio/properties-pannel/properties-panel.component';
import { ToDoListComponent } from './todolist/todolist.component';
import { ToDoItemComponent } from './todolist/todo-item/todo-item.component';
import { CheckBoxTableComponent } from './checkbox-table/checkbox-table.component';
import { UserRoleResponsibilityComponent } from './chiplist/userrole-reponsibility.component';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

const PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};
const routes: Routes = [
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: 'home', loadChildren:'./home/home.module#HomeModule'},
	{ path:'login', component: LoginComponent},
	{ path:'bpmnio',component:BPMNIOComponent},
	{ path:'todolist',component:ToDoListComponent},
	{ path:'data-table',component:CheckBoxTableComponent},
	{ path:'chiplist',component:UserRoleResponsibilityComponent},
	{ path:'**',component:PageNotFoundComponent}
	
];

@NgModule({
	imports: [
		CommonModule,
		HomeModule,
		ProductsModule,
		ReactiveFormsModule,
		ExamplesMaterialModule,
		FormsModule,
		ShopModule,
		LoginModule,
		MaterialModule,
		PerfectScrollbarModule.forRoot(PERFECT_SCROLLBAR_CONFIG),
		RouterModule.forRoot(routes)
	],
	declarations:[
					PageNotFoundComponent,
					BPMNIOComponent,
					OverlaysComponent,
					PropertiesPanelComponent,
					UserRoleResponsibilityComponent,
					ToDoListComponent,
					CheckBoxTableComponent,
					ToDoItemComponent
				],
	exports: [RouterModule]
})

export class AppRoutingModule { }
