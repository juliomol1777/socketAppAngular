import { Component, OnInit } from '@angular/core';
import { Observable} from 'rxjs';
import { Document } from '../../interfaces/chat';
import {WebSocketsService} from '../../services/web-sockets.service';

@Component({
  selector: 'app-chat-component',
  templateUrl: './chat-component.component.html',
  styleUrls: ['./chat-component.component.css']
})
export class ChatComponentComponent implements OnInit {

  documents;
  eventName = 'send message';
  currentDoc =
  {
    msg: ''
  };

  constructor(private webSocketServices : WebSocketsService) { }

  ngOnInit(): void {
    this.webSocketServices.listenEvent('text event')
      .subscribe(data => {
        this.documents= data
      },
      err => console.log(err)
      );
  } 

  sendData(){
    this.webSocketServices.emitEvent(this.eventName, this.currentDoc)
      this.currentDoc.msg = '';
   }
}
