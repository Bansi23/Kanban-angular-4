import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanbanComponent } from './canban/canban.component';
import { KanbanBoardComponent } from './kanban-board/kanban-board.component';

const routes: Routes = [
  { path: '', redirectTo: 'kanban', pathMatch: 'full' },
  { path: '**', redirectTo: 'kanban'},
  { path: 'kanban', component: KanbanBoardComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
