import { Component } from '@angular/core';
import {  NavController, NavParams, ModalController } from 'ionic-angular';
import { ModalPage } from "../index.paginas";
/**
 * Generated class for the AjustesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */


@Component({
  selector: 'page-ajustes',
  templateUrl: 'ajustes.html',
})
export class AjustesPage {

  constructor(public navCtrl: NavController,
               public navParams: NavParams,
              public ModalCtrl : ModalController) {
  }

volverPrincipal(){
  this.navCtrl.parent.select(2);
}

mostrarModal(){
  let modal =this.ModalCtrl.create(ModalPage, {nombre : "carlos", edad : 27})
  modal.present();

  modal.onDidDismiss( data =>{

    if(data){
  console.log("data del modal :");
    console.log(data);
    }
  else{
    console.log("se cerro sin parametros");
  }
  
  })
}


}
