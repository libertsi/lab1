import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyHeaderComponent } from 'src/app/my-header/my-header.component';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonInput, IonItem, IonCardContent, IonCardTitle, IonCardHeader, IonCard, LoadingController, AlertController, IonList, IonLabel} from '@ionic/angular/standalone';
@Component({
  selector: 'app-view-clothing-component',
  templateUrl: './view-clothing-component.component.html',
  styleUrls: ['./view-clothing-component.component.scss'],
  standalone: true,
    imports: [MyHeaderComponent, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonInput, IonItem, IonCardContent, IonCardTitle, IonCardHeader, IonCard, IonList, IonLabel]
})
export class ViewClothingComponentComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
