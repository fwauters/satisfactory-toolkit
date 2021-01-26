import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CardBuildingComponent } from './components/card-building/card-building.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageFooterComponent } from './components/page-footer/page-footer.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { PageMainComponent } from './components/page-main/page-main.component';
import { SimulatorComponent } from './components/simulator/simulator.component';
import { SimulatorAddBlockComponent } from './components/simulator-add-block/simulator-add-block.component';
import { SimulatorAddDialogComponent } from './components/simulator-add-dialog/simulator-add-dialog.component';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';

const MatModules = [
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatMenuModule,
  MatSelectModule
];

@NgModule({
  declarations: [
    AppComponent,
    CardBuildingComponent,
    DashboardComponent,
    NavbarComponent,
    PageFooterComponent,
    PageHeaderComponent,
    PageMainComponent,
    SimulatorComponent,
    SimulatorAddBlockComponent,
    SimulatorAddDialogComponent
  ],
  exports: [
    ...MatModules,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    ...MatModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
