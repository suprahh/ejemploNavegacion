import { Component } from '@angular/core';
import {   NavParams, ViewController, MenuController } from 'ionic-angular';

/**
 * Generated class for the ModalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */


@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

nombre:string= "";
edad:number = 0;

  constructor(public viewCtrl: ViewController, public navParams: NavParams,
              private menuCtrl : MenuController) {
 
    this.nombre = this.navParams.get("nombre");
    this.edad = this.navParams.get("edad");

    console.log(this.nombre+ " "+this.edad);
 
  }

  CerrarConParametros(){

    let data ={
      nombre: "flash",
      edad: 25,
      coords:{
        lat: 20,
        lng:-20
      }
    }
      this.viewCtrl.dismiss(data);
  }

  CerrarSinParametros(){
    this.viewCtrl.dismiss();
  }




}
