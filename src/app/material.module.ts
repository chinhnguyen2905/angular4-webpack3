import { NgModule } from '@angular/core';

import { MatSidenavModule,MatMenuModule,MatTooltipModule,MatDialogModule,MatButtonModule,MatDatepickerModule,MatTabsModule,MatInputModule,MatFormFieldModule,MatExpansionModule,MatIconModule,MatProgressBarModule,MatSliderModule,MatProgressSpinnerModule,MatCheckboxModule,MatSlideToggleModule,MatRadioModule,MatToolbarModule,MatCardModule, MatDatepicker, MatNativeDateModule, MatTableModule, MatPaginatorModule, MatSortModule} from '@angular/material';

@NgModule({
	imports: [
        MatDialogModule,
        MatMenuModule,
        MatCheckboxModule,
        MatProgressBarModule,
        MatDatepickerModule,
        MatTabsModule,
        MatExpansionModule,
        MatProgressSpinnerModule,
        MatIconModule,
        MatSliderModule,
        MatInputModule,
        MatSidenavModule,
        MatSlideToggleModule,
        MatFormFieldModule,
        MatRadioModule,
        MatCardModule,
        MatButtonModule,
        MatToolbarModule,
        MatTooltipModule,
        MatPaginatorModule,
        MatSortModule
	],
	declarations:[
					
				],
	exports: [
        MatDialogModule,
        MatMenuModule,
        MatCheckboxModule,
        MatProgressBarModule,
        MatNativeDateModule,
        MatDatepickerModule,
        MatTabsModule,
        MatExpansionModule,
        MatProgressSpinnerModule,
        MatIconModule,
        MatSliderModule,
        MatInputModule,
        MatSidenavModule,
        MatSlideToggleModule,
        MatFormFieldModule,
        MatRadioModule,
        MatCardModule,
        MatButtonModule,
        MatToolbarModule,
        MatTooltipModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule
    ]
})

export class MaterialModule { }
