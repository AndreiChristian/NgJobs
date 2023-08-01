import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const formRoutes: Routes = [
  { path: "", component: FormComponent }
]

@NgModule({
  declarations: [
    FormComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(formRoutes),
    FormsModule
  ],
  exports: [
    FormComponent
  ]
})
export class FormModule { }
