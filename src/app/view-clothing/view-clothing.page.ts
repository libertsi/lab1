import { Component, OnInit } from '@angular/core';
import { MyHeaderComponent } from '../my-header/my-header.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonInput, IonItem, IonCardContent, IonCardTitle, IonCardHeader, IonCard,  IonList, IonLabel, IonCardSubtitle} from '@ionic/angular/standalone';
import { CloudReaderService } from '../service/cloud-reader.service';
import { AddClothingComponent } from '../add-clothing/add-clothing.component';
import { EditClothingComponent } from '../edit-clothing/edit-clothing.component';
import { FilterPage } from '../filter/filter.page';
import { ConfigService } from './../service/config.service';
import { Subscription } from 'rxjs';
import { Clothing } from '../class/Сlothing/Clothing';
import { ClothingType, сlothingType } from '../class/Сlothing/ClothingType';
@Component({
  selector: 'app-view-clothing',
  templateUrl: './view-clothing.page.html',
  styleUrls: ['./view-clothing.page.scss'],
  standalone: true,
  imports: [FilterPage, EditClothingComponent, AddClothingComponent, MyHeaderComponent, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonInput, IonItem, IonCardContent, IonCardTitle, IonCardHeader, IonCard, IonList, IonLabel, IonCardSubtitle]
})
export class ViewClothingPage implements OnInit {

  constructor(public cloudReaderService: CloudReaderService) { }
  private configService = new ConfigService()
  private subscription: Subscription[] = [];
  type: ClothingType = сlothingType[0];
  ngOnInit() {
    this.cloudReaderService.load();
    const typeSub = this.configService.type$
    .subscribe(() => {
      this.type = this.configService.type$.value;
    });
    this.subscription.push(typeSub);
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
  count = 0;
  loading: any;
  showFilter = false;
  nextType() {
    this.showFilter = true;
    if(this.count < сlothingType.length - 1) {
      this.count++;
    }
    else {
      this.count = 0;
    }
    this.configService.setType(сlothingType[this.count]);
    this.cloudReaderService.search(this.configService.type$.value);
  }
  ngOnDestroy() {
    this.subscription.forEach((sub) => sub.unsubscribe());
  }


}
