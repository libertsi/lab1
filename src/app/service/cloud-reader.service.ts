import { Injectable } from '@angular/core';
import { IClothing } from '../class/Сlothing/IClothing';
import { ClothingFactory } from '../class/Сlothing/ClothingFactory';
import { ClothingType } from '../class/Сlothing/ClothingType';
import { ConfigService } from './config.service';
const api = 'https://api.jsonbin.io/v3/b/680e89b08561e97a5008e327'
@Injectable({
  providedIn: 'root'
})
export class CloudReaderService {
  public clothings: IClothing[] = [];
  addClothing(clothing: IClothing) {
    this.clothings.push(clothing);
  }
  constructor(private configService: ConfigService) { }
  public async load() {
    fetch(api)
      .then((res) => res.json())
      .then((json) => {
        let data;
        data = json;
        data = data.record;
        let clothings = data.map((item: any) => ClothingFactory.createClothing(item));
        this.clothings = []
        clothings.forEach((clothing: any) => this.addClothing(clothing));
        this.searchClothing = this.clothings;
      })
  }
  searchClothing: IClothing[] = [];
  search(type: ClothingType){
    this.searchClothing = this.clothings.filter((clothing) => {
      return clothing.getClothingType() == type;
    })
    console.log(this.searchClothing);
  }

  typeSub = this.configService.type$.subscribe(() => {
    let type = this.configService.type$.value;
    this.search(type);
  });
  
}