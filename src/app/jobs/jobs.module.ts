import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './components/table/table.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const jobsRoutes: Routes = [
  { path: "", component: TableComponent }
]

@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(jobsRoutes),
    FormsModule
  ],
  exports: [TableComponent],
})
export class JobsModule { }
