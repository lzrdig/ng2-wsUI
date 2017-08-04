// import 'reflect-metadata';
// import 'zone.js/dist/zone';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'


// declare var ENV: string;

// if (ENV === 'production') {
//   enableProdMode();
// }

import { AppModule } from './app/app.module'

platformBrowserDynamic().bootstrapModule(AppModule)