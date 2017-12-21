import { Component } from '@angular/core'

import * as Chartist from 'chartist';

import {
  ChartType,
  ChartEvent,
  ChartistComponent
} from '../../shared/chart/chart.component';

import { ReadingsComponent } from '../readings/readings.component'

// declare var require: any;

// const data: any = require('../assets/data/chartdata.json');

const smpldata: any =
  // tslint:disable-next-line:one-line
  {  'LineWithArea': {
      'labels': [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8
      ],
      'series': [
        [
          5,
          9,
          7,
          8,
          5,
          3,
          5,
          4
        ]
      ]
    }
  }


export interface Chart {
  type: ChartType;
  data: Chartist.IChartistData;
  options?: any;
  responsiveOptions?: any;
  events?: ChartEvent;
}

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'datadisplay',
  templateUrl: './datadisplay.component.html'
})
// tslint:disable-next-line:one-line
export class DataDisplayComponent{
  chart: Chart;

  constructor() {
    this.chart = {
      type: 'Line',
      data: smpldata['LineWithArea'],
      options: {
        // showLine: true,
        low: 1,
        showArea: false
      //   axisX: {
      //     labelInterpolationFnc: function (value: number, index: number): string {
      //       return index % 2 === 0 ? `W${value}` : null;
      //     }
      //   }
      },
      // responsiveOptions: [
      //   ['screen and (min-width: 640px)', {
      //     axisX: {
      //       labelInterpolationFnc: function (value: number, index: number): string {
      //         return index % 2 === 0 ? `W${value}` : null;
      //       }
      //     }
      //   }]
      // ]
    };
  }
}
