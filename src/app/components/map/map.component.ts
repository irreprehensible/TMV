import { Component, OnInit,Input, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
//import { AgmMap } from '@agm/core';
import { MapDataService } from '../../services/map-data-svc.service';



@Component({
  selector: 'map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit,AfterViewInit,OnDestroy {
  @Input() obj:any; // for the map sent via tabs
  @ViewChild('canvas') public canvas: ElementRef; 
  @ViewChild('canvasContainer') public canvasContainer: ElementRef; 

  width = 400;
  height = 400;

  private cx: CanvasRenderingContext2D;

  map:any
  mapdataservice:any
  connected:boolean
  
  // initial center position for the map
  // lat: number = 51.673858;
  // lng: number = 7.815982;
  zoom: number = 10;
  pan:number = 10;

  constructor(private _mapdataservice:MapDataService) {
    this.mapdataservice=_mapdataservice;
  }

  onZoomChanged(e){
    console.log(e.target.value)
    this.zoom = e.target.value
  }
  onMinusClick(){
    this.zoom--;
  }
  onPlusClick(){
    this.zoom++;
  }
  onPanChanged(e){
    console.log(e.target.value)
    this.pan = e.target.value
  }
  onMinusPanClick(){
    this.pan--;
  }
  onPlusPanClick(){
    this.pan++;
  }
  markers: marker[] = [];
  
  ngAfterViewInit(){
    const canvasEl: HTMLCanvasElement = this.canvas.nativeElement;
    this.cx = canvasEl.getContext('2d');

    //get dimentions
    // console.log(this.canvasContainer.nativeElement.offsetWidth)
    // console.log(this.canvasContainer.nativeElement.offsetHeight)
    this.height = this.canvasContainer.nativeElement.offsetHeight?this.canvasContainer.nativeElement.offsetHeight:161;
    this.width=this.canvasContainer.nativeElement.offsetWidth?this.canvasContainer.nativeElement.offsetWidth:1195
    //set the dimentions
    canvasEl.width = this.width;
    canvasEl.height = this.height;
    
    this.cx.fillStyle = "#000";
    this.cx.fillText("SAUD",10,10,100);
    this.cx.fillRect(20,20,500,200)
  }
  redraw(){
    
  }
  ngOnInit(): void {
    
    this.map=this.obj;
    this.mapdataservice.getServerSentEvent(`http://localhost:3000/routes`).subscribe(data => {
      
      switch (data.type) {
        case 'error':
          if (data.eventPhase == 2) { //EventSource.CLOSED
            console.log('> Connection was closed');
            this.connected=false;
          }
          break;
        case 'message':
          //TODO 
          //USE DATA TO DRAW IMAGE
          this.connected=true;
          // let r = JSON.parse(data.data).route;
          // this.lat=r.lat;
          // this.lng  =r.lng;
          // //this.map.setCenter();
          // this.markers.push({
          //     lat:r.lat,
          //     lng:r.lng,
          //     //label: 'A',
          //   });
          // if(this.markers.length > 3){
          //     this.markers.shift();
          //   }    
          break;
      
        default:
          console.log('[subscribe]',data.type);
          break;
      }
      
    })
  
  }
  ngOnDestroy(): void {
    this.connected=false;
    this.mapdataservice.closeServer(`http://localhost:3000/routes`);
    console.log('[ngOnDestroy]')
  }
}
// just an interface for type safety.
interface marker {
	lat: number;
	lng: number;
	label?: string;
}

