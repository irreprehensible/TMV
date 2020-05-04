import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LikeComponent } from './components/like/like.component';
import { MapComponent } from './components/map/map.component';
import { AgmCoreModule } from '@agm/core';
import { SseSVCService } from './services/sse-svc.service';
import { RouteService } from './services/route-svc.service';
import { HomeLinkComponent } from './components/home-link/home-link.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { TabComponent } from './components/tab/tab.component';
import { DynamicTabsDirective } from './directives/dynamic-tabs.directive';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TimeComponent } from './components/time/time.component';
import { TimeSVCService } from './services/time-svc.service';
import { TrainsSVCService } from './services/trains-svc.service';

@NgModule({
  declarations: [
    AppComponent,
    LikeComponent,
    MapComponent,
    HomeLinkComponent,
    TabsComponent,
    TabComponent,
    DynamicTabsDirective,
    NavbarComponent,
    TimeComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey:''
    })
  ],
  providers: [
    SseSVCService,
    RouteService,
    TimeSVCService,
    TrainsSVCService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
