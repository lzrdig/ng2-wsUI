import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule } from '@angular/router';

import { ChartistModule } from './shared/chart/chart.module'

import { AppComponent } from './components/root/app.component';
import { HomeComponent} from './components/home/home.component'
import { ContactComponent} from './components/contact/contact.component'
import { ProductComponent} from './components/product/product.component'
import { ErrorComponent} from './components/error/error.component'
import { NavComponent } from './components/topnav/topnav.component'
import { DataDisplayComponent } from './components/datadisplay/datadisplay.component'
import { ChartistComponent } from './shared/chart/chart.component'

import { ProductService } from './services/product.service';

import { appRoutes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent, HomeComponent, ContactComponent, ProductComponent, ErrorComponent, NavComponent, DataDisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ChartistModule,
    RouterModule.forRoot(appRoutes)                           /*path location strategy */
    /*RouterModule.forRoot(appRoutes, { useHash: true }) */   /*Hashlocationstrategy */
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { };

