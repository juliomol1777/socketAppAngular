import { Injectable } from '@angular/core';
//import * as io from 'socket.io-client';
import {io} from 'socket.io-client/build/index';

import {Observable} from 'rxjs';
import { Documento } from '../interfaces/chat';

@Injectable({

  providedIn: 'root'
})

export class WebSocketsService {

  socket : any;
  server = 'http://localhost:3000';
  
  constructor() { 
    this.socket = io(this.server)
  }

  listenEvent(eventName: string){
    return new Observable<Documento> ((subscriber) =>{
      this.socket.on(eventName, (data) =>{
        subscriber.next(data)
      })
    });
  }

  emitEvent(eventName: string, data: any) {
    this.socket.emit(eventName, data)
    //this.socket.emit('addDoc', { id: this.docId(), doc: '' });
  }
  /*
  private docId() {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < 5; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
  }*/
}
