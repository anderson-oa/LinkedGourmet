import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComicsComponent } from './comics/comics.component';
import { DetailsComponent } from './comics/details/details.component';

const routes: Routes = [
  {
    path: '',
    component: ComicsComponent,
    children:[
      {
        path:'comic/detail/:id',
        component: DetailsComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
