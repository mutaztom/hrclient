import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ServicecenterComponent } from './servicecenter/servicecenter.component';

const routes: Routes = [
  {path: "login",component :LoginComponent},
  {path: "servicecenter", component: ServicecenterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
