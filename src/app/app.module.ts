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
import { MatDatepickerModule } from '@angular/material/datepicker';
import { EmpinfoComponent } from './empinfo/empinfo.component'
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpErrorHandler } from './http-error-handler.service';
import { MessageService } from './messages.service';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ServicecenterComponent,
    OrdersComponent,
    NotificationsComponent,
    ReqmedicalComponent,
    ReqmissionComponent,
    ReqloanComponent,
    EmpinfoComponent
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
    MatToolbarModule,HttpClientModule,
    MatMenuModule,MatNativeDateModule,MatDatepickerModule,
  ],
  providers: [HttpErrorHandler,MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
