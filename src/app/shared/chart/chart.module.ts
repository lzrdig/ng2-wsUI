import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {ChartistComponent} from './chart.component'

@NgModule({
    imports: [BrowserModule],
    declarations: [ChartistComponent],
    exports: [ChartistComponent]
})
// tslint:disable-next-line:one-line
export class ChartistModule{
}

// for angular-cli
// export default {
//   directives: [ChartistComponent]
// };
