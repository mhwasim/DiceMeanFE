import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateJeansComponent } from './create-jeans/create-jeans.component';
import { JeansComponent } from './jeans/jeans.component';

const routes: Routes = [
  {
     path:'',
     component: JeansComponent
  },
  {
    path:'list',
    component: JeansComponent
  },
  {
    path:'create',
    component: CreateJeansComponent
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
