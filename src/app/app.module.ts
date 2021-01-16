import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CardBuildingComponent } from './components/card-building/card-building.component';
import { PageFooterComponent } from './components/page-footer/page-footer.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { PageMainComponent } from './components/page-main/page-main.component';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

const MatModules = [
  MatButtonModule,
  MatCardModule
];

@NgModule({
  declarations: [
    AppComponent,
    CardBuildingComponent,
    PageFooterComponent,
    PageHeaderComponent,
    PageMainComponent
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
