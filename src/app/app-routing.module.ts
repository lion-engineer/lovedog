import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{SharedlayoutComponent} from 'src/app/_shared/sharedlayout/sharedlayout.component'


const routes: Routes = [
  { 
    path: '', 
    component: SharedlayoutComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
