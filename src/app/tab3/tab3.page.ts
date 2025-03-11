import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCardHeader, IonCard, IonCardTitle, IonCardContent, IonItem, IonInput, IonButton, IonGrid, IonRow, IonCol } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { MyHeaderComponent } from '../my-header/my-header.component';
import { NgStyle } from '@angular/common';
import { NgForOf } from '@angular/common';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [NgForOf, NgStyle, IonCol, IonRow, IonGrid, IonButton, IonInput, IonItem, IonCardContent, IonCardTitle, IonCard, IonCardHeader, IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, MyHeaderComponent],
})
export class Tab3Page {
  a: any;
  columnProducts: number[] = []; 
  calculate(n1: any){
    try{
      let n = parseFloat(n1);
      if(isNaN(n) == true){
        throw new Error('Wrong parameter');
      }
      if( n <= 0){
        throw new Error('Wrong parameter');
      }

      let i: number = 0,
        j: number = 0;
      this.a = Array(n);

      for(i = 0; i < n; i++){
        this.a[i] = Array(n);
        for(j = 0; j<n; j++){
          let aa: number = Math.floor(Math.random() * 100)
          this.a[i][j] = parseFloat(aa.toFixed(2))
        }
      }
    }catch(error){
      console.log(error)
    }
    this.calculateColumnProducts();
  }
  calculateColumnProducts() {
    const numRows = this.a.length;
    const numCols = this.a[0]?.length || 0;

    this.columnProducts = Array(numCols).fill(1);

    for (let j = 0; j < numCols; j++) {
      for (let i = 0; i < numRows; i++) {
        this.columnProducts[j] *= this.a[i][j]; 
      }
    }
  }



  getColor(index: number): string{
    return this.columnProducts[index] > 1000 ? 'lightgreen' : ' red';

  }
  constructor() {}
}
