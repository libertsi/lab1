import { Injectable, Optional } from '@angular/core';
import { LogService } from '../logger/log.service';
@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  private xy = new Map();
  constructor(@Optional() private LogService: LogService) { }
  getSeries(x: number){
    let min = 1e-12;
    let sum: number = x;
    let counter: number = 2;
    let mul = -1;
    let mem = mul * (Math.pow(x, counter)/counter);
    do{
      sum = sum + mem;
      counter++;
      mul = -mul;
      mem = mul * (Math.pow(x, counter)/counter);
    }while(mem > min || mem < -min);
    return sum;
  }
  getTab(xn: number= -0.2, xk: number = 0.2, h: number = 0.1){
  let x = xn, y = 0.0;
  while(x <= xk){
    y = this.getSeries(x);
    this.xy.set(x.toFixed(2),y);
    if(this.LogService){
      this.LogService.write(`x=${x.toFixed(2)} y=${y.toFixed(4)}`);
    }
    x = x + h;
  }
  return this.xy;
  }
}