import { Component, OnInit } from '@angular/core';
import { Document } from '../../interfaces/chat';
import {ActivatedRoute} from '@angular/router';
import {WebSocketsService} from '../../services/web-sockets.service';

@Component({
  selector: 'app-chat-component',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  userChat = {
    user:'',
    text:''
  }
  newMessage = [];
  documents;
  eventName = 'send message';

  constructor(private webSocketServices : WebSocketsService,
              private activated : ActivatedRoute) { }

  ngOnInit(): void {
    //recibe los datos del user desde la home
    const id = this.activated.snapshot.params.id;
    this.userChat.user = id;

    this.webSocketServices.listenEvent('old message')
      .subscribe(data => {
        this.documents = data
        console.log(data)
      },
      err => console.log(err)
      );
      
    this.webSocketServices.listenEvent('text event')
      .subscribe((data) => {
        console.log('nuevo mensaje ' + data)
        this.newMessage.push(data)
        
      },
      err => console.log(err)
      );
}

  sendData(){
    this.webSocketServices.emitEvent(this.eventName, this.userChat)
    this.userChat.text = '';
   }
}
