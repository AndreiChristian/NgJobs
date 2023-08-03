import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './components/signin/signin.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const authRoutes: Routes = [
  { path: "signin", component: SigninComponent },
  { path: "login", component: LoginComponent }
]


@NgModule({
  declarations: [
    SigninComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(authRoutes)
  ]
})
export class AuthModule { }
