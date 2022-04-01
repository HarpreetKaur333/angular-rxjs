import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RxjsObservableComponentComponent } from './component/rxjs-observable-component/rxjs-observable-component.component';


export const routes: Routes = [
  { path:'obs',component:RxjsObservableComponentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjsRoutingModule { }
