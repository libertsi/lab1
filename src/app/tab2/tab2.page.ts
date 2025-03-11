import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonInput, IonItem, IonButton } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { MyHeaderComponent } from '../my-header/my-header.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonInput, IonItem, IonButton, ExploreContainerComponent, MyHeaderComponent]
})

export class Tab2Page {
  d: number = 1; 
  numbers: number[] = []; 

  calculate(a1: any, b1: any) {
    try {
      const a = parseInt(a1);
      const b = parseInt(b1);

      this.numbers = []; 
      this.d = 1; 

      for (let i = a; i <= b; i++) {
        if (i % 2 === 0 && i % 8 === 0) {
          this.numbers.push(i); 
          this.d *= i; 
        }
      }

      if (this.numbers.length % 2 !== 0) {
        this.d = 0; 
      }

      if (this.numbers.length == 0) {
        this.d = 0; 
      }
    } catch (error) {
      console.error("Помилка при обчисленні:", error);
      this.d = 0; 
    }
  }
  constructor() {}
}