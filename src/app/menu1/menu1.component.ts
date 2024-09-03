import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { IonButton, IonHeader, IonTitle, IonToolbar, IonContent } from "@ionic/angular/standalone";

@Component({
  selector: 'app-menu1',
  templateUrl: './menu1.component.html',
  styleUrls: ['./menu1.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, IonicModule]
})
export class Menu1Component  implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    this.checkAuthentication();
  }

  ionViewWillEnter() {
    this.checkAuthentication();
  }

  checkAuthentication() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
      this.router.navigate(['/']); // Redirige al login si no está autenticado
    }
  }

  goToRegistrarPacientes() {
    this.router.navigate(['/registrar-pacientes']);
  }

  goToAdministrarPacientes() {
    this.router.navigate(['/administrar-pacientes']);
  }

}
