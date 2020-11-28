import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ChatComponentComponent} from './components/chat-component/chat-component.component'

const routes: Routes = [
  {
    path: '',
    component: ChatComponentComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
