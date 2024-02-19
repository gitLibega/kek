import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NzButtonModule,
    NzSelectModule,
    NzModalModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
