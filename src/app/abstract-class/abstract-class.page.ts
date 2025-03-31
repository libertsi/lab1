import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MyHeaderComponent } from '../my-header/my-header.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonInput, IonItem, IonCardContent, IonCardTitle, IonCardHeader, IonCard, LoadingController, AlertController, IonList, IonLabel} from '@ionic/angular/standalone';
import { SportItems } from '../class/Abstract/SportItems';
import { SportItemFactory } from '../class/Abstract/SportItemFactory';

import { NgForOf } from '@angular/common';
@Component({
  selector: 'app-abstract-class',
  templateUrl: './abstract-class.page.html',
  styleUrls: ['./abstract-class.page.scss'],
  standalone: true,
   imports: [NgForOf, IonButton, IonInput, IonItem, IonCardContent, IonCardTitle, IonCardHeader, IonCard, IonHeader, IonToolbar, IonTitle, IonContent, MyHeaderComponent],
})
export class AbstractClassPage implements OnInit {
  ngOnInit() {
    this.load();
  }
  dataUrl = 'https://api.jsonbin.io/v3/b/67ead4b18a456b79668015cd';
  sportItems: SportItems[] = [];
  avgWeight = 0;

  data: any = [];
  constructor() { }
  async load(){
      this.data = [];
      this.sportItems = [];
      fetch(this.dataUrl)
      .then((res) => res.json())
      .then((json)=>{
        this.data = json;
        this.data = this.data.record;
        let i = 0
          while (this.data[i] != undefined){
           let f = SportItemFactory.getSportItem(
            this.data[i]['name'],
            this.data[i]['weight'],
            this.data[i]['material'],
            this.data[i]['isAdjustable'] | this.data[i]['length']
           );
           this.sportItems.push(f);
           i++
          }
          this.getAvarageWeight();
      })
    }

    getAvarageWeight(){
      let counter =0;
      let sumWeight = 0;
      for(let i =0; i<this.sportItems.length; i++){
        counter++;
        sumWeight += this.sportItems[i].weight;
      }
      this.avgWeight = (sumWeight / counter);
      console.log(this.avgWeight)
    }

    getColor(weight: number){
      console.log(parseFloat(this.avgWeight.toFixed(1)))
      if(weight < parseFloat(this.avgWeight.toFixed(1))) return 'rgb(0, 255, 34)'
      if(weight == parseFloat(this.avgWeight.toFixed(1))) return 'rgb(0, 8, 255)'
      return 'rgb(255, 0, 0)'
    }
}
