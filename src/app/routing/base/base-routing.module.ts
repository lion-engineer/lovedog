import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{SharedlayoutComponent} from '../../_shared/sharedlayout/sharedlayout.component'
import{AdoptionComponent} from '../../modules/adoption/adoption.component'
import{HostpitalComponent} from '../../modules/hostpital/hostpital.component'
import{LostComponent} from '../../modules/lost/lost.component'
import{HomeComponent} from '../../modules/home/home.component'

const routes: Routes = [{ 
  path: '', 
  component: SharedlayoutComponent,
  children: [
    {
      path: '', // child route path
      component: HomeComponent // child route component that the router renders
    },
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
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaseRoutingModule { }
