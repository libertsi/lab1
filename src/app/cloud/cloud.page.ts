import { kafedraList } from './../class/Kafedra/kafedraList';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MyHeaderComponent } from '../my-header/my-header.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonInput, IonItem, IonCardContent, IonCardTitle, IonCardHeader, IonCard, LoadingController, AlertController, IonList, IonLabel} from '@ionic/angular/standalone';
import { Kafedra } from '../class/Kafedra/kafedra';
import {Chart, registerables} from 'chart.js';
@Component({
  selector: 'app-cloud',
  templateUrl: './cloud.page.html',
  styleUrls: ['./cloud.page.scss'],
  standalone: true,
  imports: [MyHeaderComponent, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonInput, IonItem, IonCardContent, IonCardTitle, IonCardHeader, IonCard, IonList, IonLabel]
})
export class CloudPage implements OnInit {
  @ViewChild('lineCanvas') private lineCanvas?: ElementRef;
  kafedras = new kafedraList();
  
  dataUrl = 'https://api.jsonbin.io/v3/b/67d076b78561e97a50ea13e2';
  lineChart: any;
  loading: any;
  constructor(
    public loadingController: LoadingController,
    public alertController: AlertController
  ) {
    Chart.register(...registerables); 
  }

  async presetAlert(msg: string){
    const alert = await this.alertController.create({
      header:'error',
      message: msg,
      buttons: ['ok']
    });
    await alert.present();
  }
  async load(){
    this.loading = await this.loadingController.create({
      spinner: 'crescent',
      message: 'Loading...'
    });
    await this.loading.present();
    let data: any = [];
    fetch(this.dataUrl)
    .then((res) => res.json())
    .then((json)=>{
      data = json;
      data = data.record;
      let i = 0
      try{
        while (data[i] != undefined){
          if(data[i].hasOwnProperty('teacherNum')){
            this.kafedras.addKafedra(data[i] as Kafedra);
          }else throw new Error('Error load file')
          i++
        }
      }catch(e){
          this.presetAlert('error');
          console.log((e as Error).message);
      }
      this.kafedras.sort();
      this.lineChartMethod();
      this.loading.dismiss();
    })
  }

  lineChartMethod() {
    if(this.lineChart instanceof Chart) {
        this.lineChart.destroy();
    }
    const readerCounts: { [key: string]: number } = {};

    this.lineChart = new Chart(this.lineCanvas?.nativeElement, {
        type: 'bar', 
        data: {
            labels: this.kafedras.kafedras.map((data) => data.kafName),
            datasets: [{
                label: 'Кількість викладачів',
                data: this.kafedras.kafedras.map((data) =>  data.teacherNum), 
                backgroundColor: 'rgba(98, 247, 6, 0.5)',
                borderColor: 'rgb(208, 255, 0)',
                borderWidth: 3
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
  ngOnInit() {
    this.load();
  }
  isKafedraFit(kafedta: Kafedra): boolean {
    return kafedta.facultyName == "Факультет інформаційних технологій"
  }
  isKafedraFk(kafedta: Kafedra): boolean {
    return kafedta.facultyName == "Факультет кібернетики"
  }
}
