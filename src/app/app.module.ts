import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MusicsTableComponent } from './musics-table/musics-table.component';
import { ButtonDeleteComponent } from '../components/button-delete/button-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    MusicsTableComponent,
    ButtonDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }