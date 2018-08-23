import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { Observable } from 'rxjs';
import { ChatService }  from "../../app/services/chat.service";
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

  constructor( public chatService: ChatService ) {

    console.log("Hola desde el constructor")

      this.chatService.cargarMensajes().subscribe( ()=>{
        console.log("hola del subscribe")
        setTimeout(()=>{document.getElementById("myLabel").scrollIntoView(true)},20);

      });

  }

  ionViewDidEnter(){
    console.log("Hola desde el ionViewDidEnter")

  }

  enviar_mensaje(){
    console.log(this.mensaje)
    console.log("compilation test")
    document.getElementById("myLabel").scrollIntoView(true);
    if(this.mensaje.length === 0){
      return;
    }
      this.chatService.agregarMensaje(this.mensaje)
                      .then( ()=>this.mensaje = "")
                      .catch( (err)=>console.error('Error al enviar: Mensaje de firebase',err) )
    }

}
