import { Component } from '@angular/core';
import { IonButton, IonInput, IonItem, IonCardContent, IonCardTitle, IonCardHeader, IonCard, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { MyHeaderComponent } from '../my-header/my-header.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [IonButton, IonInput, IonItem, IonCardContent, IonCardTitle, IonCardHeader, IonCard, IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, MyHeaderComponent],
})
export class Tab1Page {
  d: number = 0;

  calculate(a1: any, b1: any, c1: any) {
    this.d = 0;
    try {
      let a = parseFloat(a1),
        b = parseFloat(b1),
        c = parseFloat(c1);

      if (isNaN(a) || isNaN(b) || isNaN(c)) {
        throw new Error('Wrong parameter');
      }

      const numbers = [a, b, c];
      const allEven = numbers.every(num => num % 2 === 0);

      if (allEven) {
        this.d = a * b * c;
      } else {
        const sum = a + b + c;
        
        if (sum % 2 !== 0) {
          this.d = Math.pow(sum, 2);
        } else {
          this.d = 0; 
        }
      }
    } catch (error) {
      this.d = 0;
      console.log(error);
    }
  }

  constructor() {}
}