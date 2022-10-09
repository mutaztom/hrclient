import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { ServicecenterComponent } from './servicecenter/servicecenter.component';
import { OrdersComponent } from './orders/orders.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field'
import { ReactiveFormsModule} from '@angular/forms'
import { MatButton } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { ReqmedicalComponent } from './reqmedical/reqmedical.component';
import { ReqmissionComponent } from './reqmission/reqmission.component';
import { ReqloanComponent } from './reqloan/reqloan.component';
import { MatNativeDateModule } from '@angular/material/core'
import { MatDatepickerModule } from '@angular/material/datepicker'
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ServicecenterComponent,
    OrdersComponent,
    NotificationsComponent,
    ReqmedicalComponent,
    ReqmissionComponent,
    ReqloanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,MatNativeDateModule,MatDatepickerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
