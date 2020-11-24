import { Component, VERSION } from '@angular/core';
import { GridsterConfig, GridsterItem }  from 'angular-gridster2';
import {PositionsService} from './positions.service';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = ' this is my Dashboard';
  loaded =false;
    
  options: GridsterConfig;
  dashboard: Array<GridsterItem>= []
  
  constructor(private posServ:PositionsService){}

  itemChange(item, itemComponent) {
     console.info(`state: ${JSON.stringify(this.dashboard, null, 5)}`);
     this.posServ.savePositions(this.dashboard)
  }
 
  itemResize(item, itemComponent) {
   //  console.info('itemResized', item, itemComponent);
   }
  ngOnInit() {
     this.options = {
       swap: true,
       draggable: {
        enabled: true,
       },
       resizable: {
        enabled: true,
       },
       compactType:'compactLeft&Up',
       pushItems:true,
       maxCols:100,
       gridType:'fixed',
       fixedColWidth:50,
       fixedRowHeight:50,

       
       itemChangeCallback: (item, itemComponent)=>this.itemChange(item, itemComponent),
       itemResizeCallback:  (item, itemComponent)=>this.itemResize(item, itemComponent),
     };
     this.loaded=false;// hiding the gridster untill positions are loaded
     this.posServ.getPositions().subscribe((positions)=>{
        this.dashboard= positions; 
        this.loaded=true;
     })
   }
}
