import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

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

  public items: Observable<any[]>;
  constructor(public navCtrl: NavController, public navParams: NavParams,
  db:AngularFirestore) {

      this.items = db.collection('chats').valueChanges();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
  }

  enviar_mensaje(){
    console.log(this.mensaje)
  }

}
