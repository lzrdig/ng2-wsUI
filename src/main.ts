<<<<<<< HEAD
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
=======
import './polyfills.ts';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppModule } from './app/app.module';

// if (process.env.ENV === 'production') {
//   enableProdMode();
// }

platformBrowserDynamic().bootstrapModule(AppModule);
>>>>>>> 84feb65a98884d7807fb727ea1a5248adfb87dfd
