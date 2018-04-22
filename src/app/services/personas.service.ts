import { Injectable } from '@angular/core';

import { 
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument 
} from 'angularfire2/firestore';

import{Persona} from '../models/persona';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class PersonasService {

  personaCollection: AngularFirestoreCollection<Persona>;
  personas: Observable<Persona[]>;
  personaDoc: AngularFirestoreDocument<Persona>;

  constructor(public afs:AngularFirestore) {
    this.personaCollection = this.afs.collection('persona');
    this.personas = this.personaCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Persona;
        data.id = a.payload.doc.id;
        return data;
      });
    });
  }

  getPersonas() {
    return this.personas; 
  }

  addPersona(persona: Persona) {
    this.personaCollection.add(persona);
  }

  deletePersona(persona: Persona) {
    this.personaDoc = this.afs.doc(`persona/${persona.id}`);
    this.personaDoc.delete();
  }

  updatePersona(persona: Persona) {
    this.personaDoc = this.afs.doc(`persona/${persona.id}`);
    this.personaDoc.update(persona);
  }
}