import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import 'firebase/database';
import { AngularFireDatabase } from '@angular/fire/database';
import { model } from 'src/model/model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  styles: ['table, th, td {border: 1px solid black;}']
})

export class AppComponent {
  title = 'firebaseProject';
  items: Observable<any[]>;
  slot: model = new model();
  constructor(private firestore: AngularFireDatabase) {
    this.items = firestore.list('demosmart/slots', ref => ref.limitToLast(1)).valueChanges();
    this.items.subscribe(rs => {
      this.slot = rs[0];
    });
  }
}
