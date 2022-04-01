import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GameListComponent } from './components/game-list/game-list.component';
import { GameFormComponent } from './components/game-form/game-form.component';
import { GameUpdateComponent } from './components/game-update/game-update.component';
import { componentFactoryName } from '@angular/compiler';

const routes: Routes = [

  {
    path: '',
    redirectTo: '/games',
    pathMatch: 'full'
  },

  {
    path:'games',
    component: GameListComponent
  },
  
  {
    path: 'games/add',
    component: GameFormComponent
  },

  {
    path: 'games/edit/:id',
    component: GameUpdateComponent
  },

  {
    path: 'games/editdef',
    component: GameUpdateComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
