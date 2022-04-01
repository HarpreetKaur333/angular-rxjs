import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularConceptsComponent } from './component/angular-concepts/angular-concepts.component';



export const routes: Routes = [
  { path: '', component: AngularConceptsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularRoutingModule { }
