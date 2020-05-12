import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { AppComponent } from './app.component';
import { LikeComponent } from './components/like/like.component';
import { MapComponent } from './components/map/map.component';
// import { AgmCoreModule } from '@agm/core';
import { SseSVCService } from './services/sse-svc.service';
import { MapDataService } from './services/map-data-svc.service';
import { HomeLinkComponent } from './components/home-link/home-link.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { TabComponent } from './components/tab/tab.component';
import { DynamicTabsDirective } from './directives/dynamic-tabs.directive';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TimeComponent } from './components/time/time.component';
import { TimeSVCService } from './services/time-svc.service';
import { TrainsSVCService } from './services/trains-svc.service';
import { ContextMenuComponent } from './components/context-menu/context-menu.component';
import { RouteSVCService } from './services/route-svc.service';
import { ModalComponent } from './components/modal/modal.component';
import { UserComponent } from './components/user/user.component';
import { AppErroHandler } from './common/app-error-handler';
import { HttpClientModule } from '@angular/common/http';
import { UserSVCService } from './services/user-svc.service';

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
    TimeComponent,
    ContextMenuComponent,
    ModalComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    // AgmCoreModule.forRoot({
    //   apiKey:''
    // })
  ],
  providers: [
    SseSVCService,
    MapDataService,
    TimeSVCService,
    TrainsSVCService,
    RouteSVCService,
    UserSVCService
    //{provide:ErrorHandler, useClass:AppErroHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
