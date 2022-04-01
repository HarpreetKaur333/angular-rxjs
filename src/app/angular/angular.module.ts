import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DxButtonModule } from 'devextreme-angular';
import { AngularRoutingModule } from './angular-routing.modules';
import { AngularConceptsComponent } from './component/angular-concepts/angular-concepts.component';




@NgModule({
  declarations: [
    AngularConceptsComponent
  ],
  imports: [
    ReactiveFormsModule,
    AngularRoutingModule
  ],
  providers: [],
})
export class AngularModule { }
