import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import {  NavigationExtras } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage{
  
//atributos
data={
  user:'',
  password:'',
}
  constructor(private nCtrl:NavController) {}
  //métodos
  //inicio método enviarInicio
  enviarInicio(){
    let nExtras:NavigationExtras = {
      queryParams:{
        data1: this.data.user,
        data2: this.data.password
      }
    };
    this.nCtrl.navigateForward(['/inicio'],nExtras);
  }//fin método enviarInicio

  
}//fin class HomePage
