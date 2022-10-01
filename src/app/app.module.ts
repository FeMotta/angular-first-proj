import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductModule } from './products/product.module';

@NgModule({
  declarations: [ AppComponent, WelcomeComponent ],
  imports: [ BrowserModule, HttpClientModule, RouterModule.forRoot([
      { path: 'home', component: WelcomeComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', redirectTo: 'home', pathMatch: 'full' }
    ]), ProductModule ],
  bootstrap: [ AppComponent ],
})
export class AppModule { }
 