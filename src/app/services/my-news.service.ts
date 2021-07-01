import { Injectable } from '@angular/core';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
// import { map } from 'rxjs/operators';
import { INews } from '../models/my-news.interface';

@Injectable({
  providedIn: 'root'
})
export class MyNewsService {
  private newsCollection: AngularFirestoreCollection<INews>;
  private myNews: Observable<INews[]>;

  // constructor(
  //   db: AngularFirestore
  // ) {
  //   this.newsCollection = db.collection<INews>('myNews');
  //   this.myNews = this.newsCollection.snapshotChanges().pipe(map(
  //     actions => {
  //       return actions.map(a => {
  //         const data = a.payload.doc.data();
  //         const id = a.payload.doc.id;
  //         return {id, ...data};
  //       });
  //     }
  //   ));
  // }
}
