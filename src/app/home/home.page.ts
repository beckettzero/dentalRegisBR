import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service'; // Asegúrate de que la ruta sea correcta
import { CommonModule } from '@angular/common';
import { AlertController, IonicModule, NavController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, IonicModule]
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    private alertCtrl: AlertController,
    private platform: Platform
  ) {}

  showPlatform() {
    let text = 'I run on: ' + this.platform.platforms();
    this.alertCtrl.create({
      header: 'My Home',
      subHeader: text,
      buttons: ['Ok']
    }).then(alert => alert.present());
  }
}
