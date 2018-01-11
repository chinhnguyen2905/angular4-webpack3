import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ExampleMaterialComponent } from './example-material.component';
import { MenuMaterialComponent } from './menu/menu.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { TabsComponent } from './tabs/tabs.component';
import { ExpandPanelComponent } from './expand-panel/expand-panel.component';
import { PopupComponent } from './popup/popup.component';
import { PopupContentComponent } from './popup/popup-content.component';
import { MaterialModule } from '../material.module';
import { DataTableComponent } from './data-table/data-table.component';

const routesConfig: Routes = [
	{ path:'examples', component: ExampleMaterialComponent }
];

@NgModule({
	imports: [
        CommonModule,
        FormsModule,
        FlexLayoutModule,
        MaterialModule,
        RouterModule.forChild(routesConfig)
    ],
    declarations:[
        ExampleMaterialComponent,
        MenuMaterialComponent,
        SidebarComponent,
        ToolbarComponent,
        TabsComponent,
        ExpandPanelComponent,
        PopupComponent,
        PopupContentComponent,
        DataTableComponent
        
    ],
    entryComponents: [
        PopupContentComponent
    ],
    exports: [RouterModule]
})

export class ExamplesMaterialModule { }