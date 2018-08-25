import { Injectable } from "@angular/core";
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
//import { Observable } from 'rxjs';
import { Mensaje } from "../../app/classes/mensaje.class";
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';


import 'rxjs/Rx'


@Injectable()
export class ChatService{

    chats:Mensaje[] = []
    public usuario:any = {};
    PersonURL:string = "https://heroesapp-5debd.firebaseio.com/Persona.json"
    NodoURL:string = "https://heroesapp-5debd.firebaseio.com/Persona"

    private itemsCollection: AngularFirestoreCollection<Mensaje>;


    constructor(private afs: AngularFirestore,
                public afAuth: AngularFireAuth){

         this.afAuth.authState.subscribe( user => {
           console.log('Estado del usuario: ', user)

         if(!user){
           return
         }

         this.usuario.nombre = user.displayName;
         this.usuario.uid = user.uid;

         console.log("Este es el correo en el constructor del service: ",user.email)

         } )

    }

      login(proveedor:string) {
        this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());

      }

      logout() {
        this.usuario = {}
        this.afAuth.auth.signOut();
      }

    cargarMensajes(){

          this.itemsCollection = this.afs.collection<Mensaje>('chats',
                                          ref=>ref.orderBy('fecha','desc')
                                                  .limit(50));

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



      agregarMensaje(texto:string){
        let mensaje: Mensaje = {
          nombre:this.usuario.nombre,
          mensaje: texto,
          fecha:new Date().getTime(),
          uid: this.usuario.uid
        }

        console.log("Desde el agregarMensaje, mensaje")
        console.log(mensaje)
        console.log("Desde el agregarMensaje, mensaje")
        console.log(this.usuario.uid)

        return this.itemsCollection.add(mensaje);

      }






}
