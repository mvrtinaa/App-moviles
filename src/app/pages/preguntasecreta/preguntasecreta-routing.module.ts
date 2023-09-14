import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreguntasecretaPage } from './preguntasecreta.page';

const routes: Routes = [
  {
    path: '',
    component: PreguntasecretaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreguntasecretaPageRoutingModule {}
