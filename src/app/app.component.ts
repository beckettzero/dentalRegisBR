import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { IonApp, IonRouterOutlet } from "@ionic/angular/standalone";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [IonRouterOutlet, IonApp, CommonModule, RouterOutlet, HttpClientModule] // Importa los módulos necesarios aquí
})
export class AppComponent {}
