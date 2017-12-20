import { Component } from '@angular/core'

import * as Chartist from 'chartist';

import {
  ChartType,
  ChartEvent,
  ChartistComponent
} from '../chart/chart.component';

//declare var require: any;

//const data: any = require('../assets/data/chartdata.json');

const smpldata: any = 
  {  "LineWithArea": {
      "labels": [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8
      ],
      "series": [
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
      ],
      borderwidth:10
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
  //moduleId: module.id,
  selector:'datadisplay',
  templateUrl: './app/datadisplay/datadisplay.component.html'
})
export class DataDisplayComponent{
  chart: Chart;

  constructor() {
    this.chart = {
      type: 'Line',
      data: smpldata['LineWithArea'],
      options: {
        low: 1,
        showArea: false
      }
    };
  }
}