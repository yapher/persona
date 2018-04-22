import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import  { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { TasksComponent } from './components/tasks/tasks.component';

import { TaskService } from './services/task.service';
import { PersonasService } from './services/personas.service';
import { AddTaskComponent } from './components/add-task/add-task.component';

import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { PersonasComponent } from './components/aplicaciones/personas/personas.component';
import { AlertaComponent } from './components/tools/alerta/alerta.component';
import { AlertModule } from 'ngx-bootstrap';



@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    AddTaskComponent,
    HeaderComponent,
    PersonasComponent,
    AlertaComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AlertModule.forRoot(),
    FormsModule,
    
  ],
  providers: [
    TaskService,
    PersonasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
