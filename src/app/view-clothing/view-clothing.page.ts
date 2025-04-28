import { Component, OnInit } from '@angular/core';
import { MyHeaderComponent } from '../my-header/my-header.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonInput, IonItem, IonCardContent, IonCardTitle, IonCardHeader, IonCard,  IonList, IonLabel, IonCardSubtitle} from '@ionic/angular/standalone';
import { CloudReaderService } from '../service/cloud-reader.service';
import { AddClothingComponent } from '../add-clothing/add-clothing.component';
import { EditClothingComponent } from '../edit-clothing/edit-clothing.component';
@Component({
  selector: 'app-view-clothing',
  templateUrl: './view-clothing.page.html',
  styleUrls: ['./view-clothing.page.scss'],
  standalone: true,
  imports: [EditClothingComponent, AddClothingComponent, MyHeaderComponent, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonInput, IonItem, IonCardContent, IonCardTitle, IonCardHeader, IonCard, IonList, IonLabel, IonCardSubtitle]
})
export class ViewClothingPage implements OnInit {

  constructor(public cloudReaderService: CloudReaderService) { }

  ngOnInit() {
    this.cloudReaderService.load();
  }

  showAddForm = false;

  addFormShow(){
    this.showAddForm = true;
  }
  addClothing($event: any){
    this.cloudReaderService.addClothing($event);
    this.showAddForm = false;
  }

  showEditForm = false;
  editFormNumber = 0;
  editFormShow(index: number){
    this.showEditForm = true;
    this.editFormNumber = index;
  }
  editClothing($event: any, index: number){
    this.cloudReaderService.clothings[index] = $event;
    this.showEditForm = false;
  }

}
