import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCSzC7e_fbc_J7naVOPM7B2_ES235ipP6s",
  authDomain: "raspberry-pi-86d1b.firebaseapp.com",
  databaseURL: "https://raspberry-pi-86d1b.firebaseio.com",
  projectId: "raspberry-pi-86d1b",
  storageBucket: "raspberry-pi-86d1b.appspot.com",
  messagingSenderId: "606223416310",
  appId: "1:606223416310:web:e8ee5af125375f7c6825d7",
  measurementId: "G-3944PGNQBV"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
