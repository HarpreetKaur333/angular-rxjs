import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularConceptsComponent } from './angular/component/angular-concepts/angular-concepts.component';
import { AppComponent } from './app.component';
import { RxjsAllOperatorsComponent } from './rxjs/component/rxjs-all-opertors/rxjs-all-opertors.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        // component:RxjsAllOperatorsComponent,
        loadChildren: () => import('../app/rxjs/rxjs.module').then(m => m.RxjsModule),
      },
      {
        path: 'angular',
        // component:AngularConceptsComponent,
        loadChildren: () => import('../app/angular/angular.module').then(m => m.AngularModule),
      },

    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations:[]
})
export class AppRoutingModule { }
