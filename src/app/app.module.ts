import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpModule }    from '@angular/http';
import { FormsModule } from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {ChartistModule} from './chart/chart.module'

import {PwsAppComponent} from './app.component'
import {StartComponent} from './home/start.component'
import {DataDisplayComponent} from './datadisplay/datadisplay.component'

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        ChartistModule,
        AppRoutingModule],
    declarations:[
        PwsAppComponent, 
        StartComponent,
        DataDisplayComponent],
    bootstrap:[PwsAppComponent]
})
export class AppModule{}