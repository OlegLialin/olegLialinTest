import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Mission1Component} from './mission1/mission1.component';
import {Mission2Component} from './mission2/mission2.component';
import {Mission3Component} from './mission3/mission3.component';

const routes: Routes = [
    {path: '', component: Mission1Component},
    {path: 'Mission2', component: Mission2Component},
    {path: 'Mission3', component: Mission3Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
