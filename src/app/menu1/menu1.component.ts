import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, IonicModule } from '@ionic/angular';
import { IonButton, IonHeader, IonTitle, IonToolbar, IonContent } from "@ionic/angular/standalone";

@Component({
  selector: 'app-menu1',
  templateUrl: './menu1.component.html',
  styleUrls: ['./menu1.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, IonicModule]
})
export class Menu1Component  implements OnInit {


  conditionsWithColors: { condition: string, color: string }[] = [
    { condition: 'Caries', color: '#FF0000' },
    { condition: 'Diente Obturado', color: '#00FF00' },
    { condition: 'Ausente', color: '#0000FF' },
    { condition: 'Fractura', color: '#FFFF00' },
    { condition: 'Resina', color: '#FF00FF' },
    { condition: 'Amalgama', color: '#00FFFF' },
    { condition: 'Erosion', color: '#000000' },
    { condition: 'Obturación', color: '#FFFFFF' },
    { condition: 'Sellante', color: '#FF0000' },
    { condition: 'Enfermedad Periodontal', color: '#00FF00' },
    { condition: 'Mal posición dentaria', color: '#0000FF' },
    { condition: 'Exodoncia', color: '#FFFF00' },
    { condition: 'Corona', color: '#FF00FF' },
    { condition: 'Prótesis', color: '#00FFFF' },
    { condition: 'Mancha Blanca', color: '#000000' },
    { condition: 'Otro', color: '#FFFFFF' }
  ];

  // Mapa para almacenar los colores seleccionados por sección
  colors: { [key: string]: string } = {
    section1: '#FFFFFF',
    section2: '#FFFFFF',
    section3: '#FFFFFF',
    section4: '#FFFFFF',
    center: '#FFFFFF'
  };

  // Mapa para almacenar las selecciones de colores
  selectedColors: { [key: string]: string } = {};

  constructor(private router: Router, private alertCtrl: AlertController) { }

   // Método para seleccionar un color para una sección
   async selectColor(section: keyof typeof this.colors) {
    const alert = await this.alertCtrl.create({
      header: 'Select Condition',
      inputs: this.conditionsWithColors.map(item => ({
        name: item.condition,
        type: 'radio',
        label: item.condition,
        value: item.color, // Envía el color correspondiente
        checked: this.colors[section] === item.color // Marca el color actual si está asignado
      })),
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'OK',
          handler: (selectedColor) => {
            this.colors[section] = selectedColor; // Actualiza el color de la sección
          }
        }
      ]
    });

    await alert.present();
  }



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
