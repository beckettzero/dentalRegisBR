import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Importa ReactiveFormsModule si estás usando formularios reactivos
import { AppComponent } from './app.component';
import { HomePage } from './home/home.page'; // Asegúrate de importar cualquier otro componente necesario
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule ,
    FormsModule,
    IonicModule.forRoot(),
    RouterModule.forRoot([
      // Tus rutas aquí
    ]),
  ],
  providers: [AppComponent],
})
export class AppModule { }
