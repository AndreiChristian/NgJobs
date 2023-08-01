import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from './home/home.module';
import { FormModule } from './form/form.module';
import { JobsModule } from './jobs/jobs.module';

const routes: Routes = [
  { path: "", loadChildren: () => import('./home/home.module').then(m => HomeModule) },
  { path: "form", loadChildren: () => import("./form/form.module").then(m => FormModule) },
  { path: "jobs", loadChildren: () => import("./jobs/jobs.module").then(m => JobsModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
