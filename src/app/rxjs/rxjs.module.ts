import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DxButtonModule } from 'devextreme-angular';
import { CommonHeaderComponent } from '../core/header/header.component';
import { RxjsAllOperatorsComponent } from './component/rxjs-all-opertors/rxjs-all-opertors.component';
import { RxjsObservableComponentComponent } from './component/rxjs-observable-component/rxjs-observable-component.component';
import { RxjsRoutingModule } from './rxjs-routing.modules';



@NgModule({
  declarations: [
    RxjsObservableComponentComponent,
    RxjsAllOperatorsComponent,
    CommonHeaderComponent
  ],
  imports: [
    DxButtonModule,
    ReactiveFormsModule,
    RxjsRoutingModule
  ],
  providers: [],
})
export class RxjsModule { }
