import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonLabel, IonItem } from '@ionic/angular/standalone';
import { ConfigService } from '../service/config.service';
import { Subscription } from 'rxjs';
import { Clothing } from '../class/Сlothing/Clothing';
import { ClothingType, сlothingType } from '../class/Сlothing/ClothingType';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.page.html',
  styleUrls: ['./filter.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonButton, IonLabel, IonItem]
})
export class FilterPage implements OnInit {

  private configService = new ConfigService();
  private subscription: Subscription[] = [];

  constructor() { }
  type: ClothingType = сlothingType[0];
  count = 0;
  loading: any;
  ngOnInit() {
    const typeSub = this.configService.type$
      .subscribe(() => {
        this.type = this.configService.type$.value;
      });
    this.subscription.push(typeSub);
  }
  nextType() {
    if(this.count < сlothingType.length - 1) {
      this.count++;
    }
    else {
      this.count = 0;
    }
    this.configService.setType(сlothingType[this.count]);

  }
  ngOnDestroy() {
    this.subscription.forEach((sub) => sub.unsubscribe());
  }


}
