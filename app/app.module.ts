import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { GridsterModule } from 'angular-gridster2';
import {PositionsService} from './positions.service';
@NgModule({
  imports:      [ BrowserModule, FormsModule, GridsterModule],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ],
  providers:[PositionsService]
})
export class AppModule { }
