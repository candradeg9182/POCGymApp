import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Observable } from 'rxjs';
import { ChatService }  from "../../app/services/chat.service";
import { LoginPage } from "../login/login";
/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {



  mensaje:string = "";
  elemento:any;


  public items: Observable<any[]>;

  constructor( public chatService: ChatService,
               public navCtrl:NavController) {

      this.chatService.cargarMensajes().subscribe( ()=>{
        setTimeout(()=>{document.getElementById("myLabel").scrollIntoView(true)},200);

      });

  }

  ionViewDidEnter(){


  }

  logout(){
    this.chatService.logout()
    this.navCtrl.setRoot( LoginPage )

  }

  enviar_mensaje(){

    console.log("Ejecucion del view")
        setTimeout(()=>{document.getElementById("myLabel").scrollIntoView(true)},200);
    console.log("Ejecucion del view")

    if(this.mensaje.length === 0){
      return;
    }
      this.chatService.agregarMensaje(this.mensaje)
                      .then( ()=>this.mensaje = "")
                      .catch( (err)=>console.error('Error al enviar: Mensaje de firebase',err) )
    }

}
