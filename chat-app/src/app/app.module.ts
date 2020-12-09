import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatComponent } from './components/chat/chat.component';
import { FormsModule } from '@angular/forms';
//import { SocketIoModule } from 'ngx-socket-io';
//import { CookieService } from 'ngx-cookie-service';
import { WebSocketsService } from './services/web-sockets.service';
import { HomeComponent } from './components/home/home.component';
//import {SocketIoConfig } from 'ngx-socket-io';

//const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    //SocketIoModule.forRoot(config)
  ],
  providers: [WebSocketsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
