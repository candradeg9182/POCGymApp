import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ChatPage } from "../pages/chat/Chat";

import { AngularFirestore } from 'angularfire2/firestore';

import { Observable } from 'rxjs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = ChatPage;

  pages: Array<{title: string, component: any}>;
  public items: Observable<any[]>;
  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,
              db:AngularFirestore) {

    this.initializeApp();
    this.items = db.collection('items').valueChanges();


    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Chat', component: ChatPage },
      { title: 'List', component: ListPage },
      { title: 'Home', component: HomePage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
