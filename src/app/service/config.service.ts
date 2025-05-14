import { DEFAULT_CURRENCY_CODE, Injectable } from '@angular/core';
import { ClothingType, сlothingType } from '../class/Сlothing/ClothingType';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  currentType = DEFAULT_TYPE;
  type$: BehaviorSubject<ClothingType> = new BehaviorSubject<ClothingType>(DEFAULT_TYPE);
  setType(type: ClothingType) {
    console.log(type);
    this.type$.next(type);
  }
  
  constructor() { }
}

const DEFAULT_TYPE = сlothingType[0];