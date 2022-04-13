import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './componenets/layouts/main/header/menu/menu.component';
import { CopyrightComponent } from './componenets/layouts/main/footer/copyright/copyright.component';
import { FormLoginComponent } from './componenets/user/form-login/form-login.component';
import { TituloComponent } from './componenets/layouts/main/content/titulo/titulo.component';
import { ClientListComponent } from './componenets/client/client-list/client-list.component';
import { ClientsService } from './services/clients.service';
import { CreateClientComponent } from './componenets/client/create-client/create-client.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CopyrightComponent,
    FormLoginComponent,
    TituloComponent,
    ClientListComponent,
    CreateClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ClientsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
