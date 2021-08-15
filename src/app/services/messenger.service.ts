import { Injectable } from '@angular/core';
import { Subject } from 'rxjs'
import { Product } from 'src/app/models/product';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {
  // subject = new Subject()
  // Subject. subject= new Subject(); 
  subject= new Subject<Product>();
  constructor() { }
  sendMsg(product:any) {
    console.log(product);
    this.subject.next(product) //Triggering an event
  }

  getMsg() {
    return this.subject.asObservable()
  }
}
