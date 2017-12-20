import { Routes } from '@angular/router';

import { HomeComponent} from './components/home/home.component'
import { ContactComponent} from './components/contact/contact.component'
import { ProductComponent} from './components/product/product.component'
import { ErrorComponent} from './components/error/error.component'
import { DataDisplayComponent } from './components/datadisplay/datadisplay.component'

export const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'product', component: ProductComponent },
  { path: 'datadisplay', component: DataDisplayComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: ErrorComponent }
];
