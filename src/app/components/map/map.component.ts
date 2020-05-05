import { Component, OnInit,Input } from '@angular/core';
//import { AgmMap } from '@agm/core';
import { RouteService } from '../../services/route-svc.service';



@Component({
  selector: 'map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  @Input() obj:any;
  map:any
  routes:any
  connected:boolean
  
  // initial center position for the map
  lat: number = 51.673858;
  lng: number = 7.815982;
  zoom: number = 7; 
  // onCenterChange(latlng){
  //   console.log('center changed', latlng);
  // }
  // public getMapInstance(map) {
  //    console.log(map);
  //     this.map=map;
     
  // }
  

  markers: marker[] = [];
  constructor(private _routes:RouteService) {
    this.routes=_routes;
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
          this.connected=true;
          let r = JSON.parse(data.data).route;
          this.lat=r.lat;
          this.lng  =r.lng;
          //this.map.setCenter();
          this.markers.push({
              lat:r.lat,
              lng:r.lng,
              //label: 'A',
            });
          if(this.markers.length > 3){
              this.markers.shift();
            }    
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

