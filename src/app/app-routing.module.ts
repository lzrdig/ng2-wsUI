//import { ModuleWithProviders } from '@angular/core';
import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { DataDisplayComponent } from './datadisplay/datadisplay.component';
import { StartComponent } from './home/start.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: StartComponent },    
  { path: 'datadisplay', component: DataDisplayComponent },    
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: []
})
export class AppRoutingModule {}
//export const routing: ModuleWithProviders = RouterModule.forRoot(routes);