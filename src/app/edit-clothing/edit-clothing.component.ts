import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonInput, IonButton } from '@ionic/angular/standalone';
import { IClothing } from '../class/Сlothing/IClothing';
import { FormBuilder, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { сlothingType } from '../class/Сlothing/ClothingType';
import { ClothingFactory } from '../class/Сlothing/ClothingFactory';
import { formConstructor } from '../forms/formconstructor';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-edit-clothing',
  templateUrl: './edit-clothing.component.html',
  styleUrls: ['./edit-clothing.component.scss'],
  standalone: true,
  imports: [IonButton, IonItem, IonCardContent, IonCardTitle, IonCardHeader, IonCard, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ReactiveFormsModule, IonInput]

})
export class EditClothingComponent  implements OnInit {
  @Input() clothing!: IClothing;
  @Output() clothingEdit: EventEmitter<IClothing> = new EventEmitter<IClothing>();
  clothingFrom!: FormGroup;
  types = сlothingType;
  constructor(private fb: FormBuilder) { }
  onSubmit(): void{
    console.log(this.clothingFrom.valid);
    if (true) {
      const clothingData = this.clothingFrom.value;
      clothingData.clothingType = this.clothing.getClothingType();
      console.log(clothingData);
      console.log(clothingData.clothingType);
      console.log(clothingData);
      const clothing = ClothingFactory.createClothing(clothingData);
      this.clothingEdit.emit(clothing);
      
      console.log('Форма валідна', clothing);
    } else {
      console.log(this.clothing);
      
      console.error('Форма не валідна');
    }
  }
  ngOnInit() {
    console.log(this.clothing);
    this.clothingFrom = this.fb.group({
      name: [this.clothing.getName(), [Validators.required, Validators.minLength(3)]],
      brand: [this.clothing.getBrand(), [Validators.required, Validators.minLength(3)]],
      price: [this.clothing.getPrice(), [Validators.required, Validators.min(1)]],
      material: [this.clothing.getMaterial(), [Validators.required, Validators.minLength(3)]],
    });
    formConstructor(this.clothing.getClothingType(), this.clothingFrom, this.fb);
    
  }

}
