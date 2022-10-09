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
import { ReactiveFormsModule} from '@angular/forms/'
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ServicecenterComponent,
    OrdersComponent,
    NotificationsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule ,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
