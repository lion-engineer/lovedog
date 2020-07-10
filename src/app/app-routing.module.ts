import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{SharedlayoutComponent} from 'src/app/_shared/sharedlayout/sharedlayout.component'
import{AdoptionComponent} from 'src/app/modules/adoption/adoption.component'
import{HostpitalComponent} from 'src/app/modules/hostpital/hostpital.component'
import{LostComponent} from 'src/app/modules/lost/lost.component'


const routes: Routes = [
  { 
    path: '', 
    component: SharedlayoutComponent,
    children: [
      {
        path: 'adopt', // child route path
        component: AdoptionComponent // child route component that the router renders
      },
      {
        path: 'hospital',
        component: HostpitalComponent // another child route component that the router renders
      },
      {
        path: 'lost',
        component: LostComponent // another child route component that the router renders
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
