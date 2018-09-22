import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddTasksComponent } from './components/add-tasks/add-tasks.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTasksComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
