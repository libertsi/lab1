import { LogService } from './../logger/log.service';
import { Injectable, Optional } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecursionService {
  yy: number = 0;
  private xy = new Map();
  constructor(@Optional() private logService: LogService) { }

  getRecursion(x: number, sum: number, mul: number, counter: number){
    let mem = mul * (Math.pow(x, counter)/counter);
    sum = sum + mem;
    counter++;
    mul = -mul;
    let min = 1e-12; 
    if(mem > min || mem < -min) this.getRecursion(x, sum, mul, counter);
    else this.yy = sum;
  }

  getTab(xn: number= -0.2, xk: number = 0.2, h: number = 0.1){
    let x = xn, mul = -1, counter = 2;
    while(x <= xk){
      this.getRecursion(x, x, mul, counter);
      this.xy.set(x.toFixed(2), this.yy);
      if(this.logService){
        this.logService.write(`x=${x.toFixed(2)} y=${this.yy.toFixed(4)}`);
      }
      x = x + h;
    }
    return this.xy;
  }
}