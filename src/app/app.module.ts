import { AuthGuard } from './services/guards/auth.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { IndexComponent } from './components/index/index.component';
import { SidebarComponent } from './components/index/sidebar/sidebar.component';
import { TopbarComponent } from './components/index/topbar/topbar.component';
import { ChartboxComponent } from './components/chartbox/chartbox.component';
import { FooterComponent } from './components/footer/footer.component';
import { StoreModule } from '@ngrx/store';
import { userReducer } from './store/reducers/user.reducer';
import { StoreService } from './services/store/store.service';
import { SettingsComponent } from './components/admin/settings/settings.component';
import { UserActionsComponent } from './components/admin/user-actions/user-actions.component';
import { MessagesComponent } from './components/admin/messages/messages.component';
import { NotificationsComponent } from './components/admin/notifications/notifications.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    IndexComponent,
    SidebarComponent,
    TopbarComponent,
    ChartboxComponent,
    FooterComponent,
    SettingsComponent,
    UserActionsComponent,
    MessagesComponent,
    NotificationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      User: userReducer
    }),
  ],
  providers: [
    StoreService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
