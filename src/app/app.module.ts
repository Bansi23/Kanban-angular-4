import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CanbanComponent } from './canban/canban.component';
import { ModalModule } from "ngx-bootstrap";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { KanbanBoardComponent } from './kanban-board/kanban-board.component';

@NgModule({
  declarations: [
    AppComponent,
    CanbanComponent,
    KanbanBoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
