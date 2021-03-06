import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChatService }  from "../../app/services/chat.service";
import { ChatPage } from "../chat/chat";
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public chatService:ChatService) {
  }

  ionViewDidLoad() {
    if(this.chatService.usuario.uid != null)
      {
      this.navCtrl.setRoot(ChatPage)
    }

  }



  ingresar(proveedor:string){



    if(this.chatService.usuario.uid == null)
      {

        if(proveedor === "facebook"){
        this.chatService.signInWithFacebook()
        this.navCtrl.setRoot(ChatPage)
        }

        else {
      this.chatService.login(proveedor)
      this.navCtrl.setRoot(ChatPage)
    }

  }

  }//-------

  }
