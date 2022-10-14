import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpinfoComponent } from './empinfo/empinfo.component';
import { LoginComponent } from './login/login.component';
import { ReqloanComponent } from './reqloan/reqloan.component';
import { ReqmedicalComponent } from './reqmedical/reqmedical.component';
import { ReqmissionComponent } from './reqmission/reqmission.component';
import { ServicecenterComponent } from './servicecenter/servicecenter.component';

const routes: Routes = [
  {path: "login",component :LoginComponent},
  {path: "empinfo",component :EmpinfoComponent},
  {path: "servicecenter", component: ServicecenterComponent},
  {path: "reqmedical", component: ReqmedicalComponent},
  {path: "reqmission", component: ReqmissionComponent},
  {path: "reqloan", component: ReqloanComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
