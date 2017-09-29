import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
