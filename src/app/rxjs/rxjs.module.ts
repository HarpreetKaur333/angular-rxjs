import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DxButtonModule } from 'devextreme-angular';
import { RxjsAllOperatorsComponent } from './component/rxjs-all-opertors/rxjs-all-opertors.component';
import { RxjsObservableComponentComponent } from './component/rxjs-observable-component/rxjs-observable-component.component';



@NgModule({
  declarations: [
    RxjsObservableComponentComponent,
    RxjsAllOperatorsComponent
  ],
  imports: [
    DxButtonModule,
  ],
  providers: [],
  bootstrap: []
})
export class RxjsModule { }
