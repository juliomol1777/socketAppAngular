import { Component, OnInit } from '@angular/core';
import {Documento} from '../../interfaces/chat';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  /*User = {
    name:''
  }*/
  User : Documento = {
    user: '',
    texto: '' 
  };

  constructor() { }

  ngOnInit(): void {
  }

}
