import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MyHeaderComponent } from '../my-header/my-header.component';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonInput, IonItem, IonCardContent, IonCardTitle, IonCardHeader, IonCard, LoadingController, AlertController, IonList, IonLabel} from '@ionic/angular/standalone';
import { TabService } from './../service/tab/tab.service';
import { SeriesService } from '../service/series/series.service';
import { RecursionService } from '../service/recursion/recursion.service';
import { Chart, registerables } from 'chart.js';
@Component({
  selector: 'app-servicepage',
  templateUrl: './servicepage.page.html',
  styleUrls: ['./servicepage.page.scss'],
  standalone: true,
 imports: [MyHeaderComponent, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonInput, IonItem, IonCardContent, IonCardTitle, IonCardHeader, IonCard, IonList, IonLabel]
})
export class ServicepagePage implements OnInit {

  constructor(private tabService: TabService, private seriesService: SeriesService, private recursionService: RecursionService) { 
    Chart.register(...registerables)
  }
  xyTab = new Map();
  yyTab: number[] = [];
  xySeries = new Map();
  yySer: number[] = [];
  xyRecursion = new Map();
  yyRec: number[] = [];
  xyInput: string[] = [];
  xx: string[] = [];
  
  ras(xn: any, xk: any, h: any){
    try{
      let xn1 = parseFloat(xn);
      let xk1 = parseFloat(xk);
      let h1 = parseFloat(h);
      this.xx = [];
      this.yyTab = [];
      let obj = this.tabService.getTab(xn1, xk1, h1);
      console.log(obj);
      this.xx = obj.x;
      this.yyTab = obj.y;
      this.xySeries = this.seriesService.getTab(xn1, xk1, h1);
      console.log(this.xySeries);
      this.xyRecursion = this.recursionService.getTab(xn1, xk1, h1);
      this.input();
      this.lineChartMake();
    }catch{}
  

  }
  @ViewChild('lineCanvas') private lineCanvas?: ElementRef;

  lineChart: any;
  lineChartMake(){
    if(this.lineChart instanceof Chart) {
      this.lineChart.destroy();
    }
    this.lineChart = new Chart(this.lineCanvas?.nativeElement, {
      type: 'line',
      data: {
        labels: this.xx,
        datasets: [
          {
            label: 'Tab',
            data: this.yyTab,
            fill: false,
            borderColor: 'rgb(0, 217, 255)',
            borderWidth: 1,
            borderDashOffset: 0.0,
            pointRadius: 2,
            spanGaps: false
          },
          {
            label: 'Rec',
            data: this.yyRec,
            fill: false,
            borderColor: 'rgb(255, 255, 255)',
            borderWidth: 1,
            borderDashOffset: 0.0,
            pointRadius: 4,
            spanGaps: false
          },
          {
            label: 'Ser',
            data: this.yySer,
            fill: false,
            borderColor: 'rgb(255, 0, 166)',
            borderWidth: 1,
            borderDashOffset: 0.0,
            pointRadius: 6,
            spanGaps: false
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          x:{
            suggestedMin:0,
            title:{
              display: true,
              text: 'X'
            },
            ticks:{
              stepSize: 0.001,
            },
          },
          y:{
            title:{
              display: true,
              text: 'Y'
            },
            ticks:{
              stepSize: 0.001,
            },
          },
        },
      },
    });
  }
  input(){
    this.yySer = new Array;
    this.yyRec = new Array;
    this.xyInput = [];
    this.xx.forEach((value, index) => {
      let s = '';
      let y: number = 0;
      y = this.yyTab[index];
      s = y.toFixed(4) + ' ';
      
      y = this.xySeries.get(value);
      this.yySer.push(y);
      s = s + y.toFixed(4);
      y = this.xyRecursion.get(value);
      
      this.yyRec.push(y);
      s = s + ' ' + y.toFixed(4);
      this.xyInput.push(s);
    });
  }
  

  ngOnInit() {}
}