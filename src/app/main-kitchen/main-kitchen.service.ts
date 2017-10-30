import { Injectable } from '@angular/core';
import promise from './mock-data';

@Injectable()
export class MainKitchenService {
  constructor() {}

  public getData() {
    return promise.then(res => res);
  }
}
