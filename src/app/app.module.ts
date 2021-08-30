import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowdataComponent } from './showdata/showdata.component';
import { InsertdataComponent } from './insertdata/insertdata.component';
import { UpdatedataComponent } from './updatedata/updatedata.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InsertformComponent } from './withrealdata/insertform/insertform.component';
import { ShowstuddataComponent } from './withrealdata/showstuddata/showstuddata.component';
import { UpdatestuddataComponent } from './withrealdata/updatestuddata/updatestuddata.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TableModule} from 'primeng/table';

@NgModule({
  declarations: [
    AppComponent,
    ShowdataComponent,
    InsertdataComponent,
    UpdatedataComponent,
    InsertformComponent,
    ShowstuddataComponent,
    UpdatestuddataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
