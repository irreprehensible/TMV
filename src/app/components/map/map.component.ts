import { Component, OnInit,Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
//import { AgmMap } from '@agm/core';
import { RouteService } from '../../services/route-svc.service';



@Component({
  selector: 'map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit,AfterViewInit {
  @Input() obj:any; // for the map sent via tabs
  @ViewChild('canvas') public canvas: ElementRef; 

  @Input() public width = 400;
  @Input() public height = 400;

  private cx: CanvasRenderingContext2D;

  map:any
  routes:any
  connected:boolean
  
  // initial center position for the map
  // lat: number = 51.673858;
  // lng: number = 7.815982;
  zoom: number = 10;
  pan:number = 10;

  constructor(private _routes:RouteService) {
    this.routes=_routes;
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

    canvasEl.width = this.width;
    canvasEl.height = this.height;

    
  }
  ngOnInit(): void {
    
    this.map=this.obj;
    this.routes.getServerSentEvent(`http://localhost:3000/routes`).subscribe(data => {
      
      switch (data.type) {
        case 'error':
          if (data.eventPhase == 2) { //EventSource.CLOSED
            console.log('> Connection was closed');
            this.connected=false;
          }
          break;
        case 'message':
          // this.connected=true;
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
    //   let l = 51.723858;
    //   let a = 7.985982;
    // setInterval(()=>{
    //   l = l + 0.100000;
    //   a = a + 0.100000;
    //   this.markers.push({
    //     lat: l,
		//     lng: a,
		//     //label: 'A',
    //   });
    //   if(this.markers.length > 3){
    //       this.markers.shift();
    //   }
    //   this.lat=l;
    //   this.lng =a;
    //   //this.map.setCenter()
    // },1000);
    
  }

}
// just an interface for type safety.
interface marker {
	lat: number;
	lng: number;
	label?: string;
}

