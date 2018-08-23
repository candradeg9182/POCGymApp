import { Injectable } from "@angular/core";
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
//import { Observable } from 'rxjs';
import { Mensaje } from "../../app/classes/mensaje.class";

import 'rxjs/Rx'


@Injectable()
export class ChatService{

    chats:Mensaje[] = []
    PersonURL:string = "https://heroesapp-5debd.firebaseio.com/Persona.json"
    NodoURL:string = "https://heroesapp-5debd.firebaseio.com/Persona"

    private itemsCollection: AngularFirestoreCollection<Mensaje>;


    constructor(private afs: AngularFirestore){
    }

    cargarMensajes(){

          this.itemsCollection = this.afs.collection<Mensaje>('chats',
                                          ref=>ref.orderBy('fecha','desc')
                                                  .limit(5));

          return this.itemsCollection.valueChanges()
                                     .map(  (mensajes:Mensaje[]) =>{
                                       console.log(mensajes)

                                       this.chats = [];
                                       for (let mensaje of mensajes){
                                         this.chats.unshift( mensaje )
                                       }

                                      return this.chats;

                                      // this.chats = mensajes
                                     } )
                    }


// TODO falta el UID del usuario
      agregarMensaje(texto:string){
        let mensaje: Mensaje = {
          nombre:'Fernando Demo',
          mensaje: texto,
          fecha:new Date().getTime()
        }

        return this.itemsCollection.add(mensaje);

      }






}
