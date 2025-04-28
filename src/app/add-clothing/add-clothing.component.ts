import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonInput, IonSegment, IonLabel, IonSegmentButton, IonSegmentView, IonSegmentContent, IonCheckbox, IonButton } from '@ionic/angular/standalone';
import { Clothing } from '../class/Сlothing/Clothing';
import { сlothingType, ClothingType } from '../class/Сlothing/ClothingType';
import { IClothing } from '../class/Сlothing/IClothing';
import { formConstructor } from '../forms/formconstructor';
import { ClothingFactory } from '../class/Сlothing/ClothingFactory';

@Component({
  selector: 'app-add-clothing',
  templateUrl: './add-clothing.component.html',
  styleUrls: ['./add-clothing.component.scss'],
  standalone: true,
  imports: [IonButton, IonCheckbox, IonSegmentButton, IonLabel, IonSegment, IonInput, IonItem, IonCardContent, IonCardTitle, IonCardHeader, IonCard, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ReactiveFormsModule, IonSegmentView, IonSegmentContent]
})
export class AddClothingComponent  implements OnInit {

  clothingForm!: FormGroup;
  currentType: ClothingType = 'Outerwear';
  types = сlothingType;
  @Output() clothingAdd: EventEmitter<IClothing> = new EventEmitter<IClothing>();
  constructor(private fb: FormBuilder) {
    this.clothingForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    brand: ['', [Validators.required, Validators.minLength(3)]],
    price: [1, [Validators.required, Validators.min(1)]],
    material: ['', [Validators.required, Validators.minLength(3)]],
    });
   }
   onFootwearChange(change: any){
    if(change) this.onTypeChange(this.types[1]);
    else this.currentType = this.types[0];
   }
   onJeansChange(change: any){
    if(change) this.onTypeChange(this.types[3]);
    else this.currentType = this.types[0];
   }
   onTypeChange(type: any) {
    console.log(type);
    this.currentType = type as ClothingType;
    formConstructor(type, this.clothingForm, this.fb);
  }
  onSubmit() {
    if (this.clothingForm.valid) {
      const clothingData = this.clothingForm.value;
      clothingData.clothingType = this.currentType;
      console.log(clothingData.clothingType)
      const clothing = ClothingFactory.createClothing(clothingData)
      this.clothingAdd.emit(clothing);
      console.log('Form is valid', clothing);
    } else {
      console.error('Form is invalid');
    }
  }
  ngOnInit() {
    this.onTypeChange(this.currentType);
  }

}
