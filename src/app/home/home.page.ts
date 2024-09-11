import { Component, OnInit, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { IonicModule, LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, IonicModule]
})
export class HomePage implements OnInit {
  loginForm: FormGroup;
  inactivityTimer: any;
  showToast: any;
  toastMessage: any;
  toastColor: any;

  constructor(private fb: FormBuilder, private router: Router, private http: HttpClient,private loadingCtrl: LoadingController) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Comprobando...',
      duration: 3000,
    });

    loading.present();
  }

  ngOnInit() {
    this.resetInactivityTimer();
    this.setupInactivityListeners();
  }

  // Manejadores para diferentes eventos de interacción
  @HostListener('window:mousemove') onMouseMove() {
    this.resetInactivityTimer();
  }

  @HostListener('window:touchstart') onTouchStart() {
    this.resetInactivityTimer();
  }

  @HostListener('window:keydown') onKeyDown() {
    this.resetInactivityTimer();
  }

  @HostListener('window:click') onClick() {
    this.resetInactivityTimer();
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const username = this.loginForm.get('username')!.value;
      const password = this.loginForm.get('password')!.value;
  
      this.http.post<any>('https://www.dentalregisbr.000.pe/loginDB.php', { username, password }).subscribe(response => {
        if (response.status === 'success') {
          // Aquí asumo que `response.usuario_id` es el ID del usuario que viene desde el backend.
          localStorage.setItem('isLoggedIn', 'true');
          localStorage.setItem('usuario_id', response.usuario_id); // Guarda el usuario_id en localStorage
          this.router.navigate(['/menu1']);
          this.resetInactivityTimer();
        } else {
          alert('Invalid credentials');
        }
      });
    }
  }
  
  resetInactivityTimer() {
    if (this.inactivityTimer) {
      clearTimeout(this.inactivityTimer);
    }

    this.inactivityTimer = setTimeout(() => {
      this.logout();
    }, 60000); // 10 segundos
  }

  logout() {
    localStorage.removeItem('isLoggedIn');
    this.router.navigate(['/']);
    alert('Session expired due to inactivity.');
  }

  setupInactivityListeners() {
    // Se asegura de que se reinicie el timer para cualquier interacción
    this.onMouseMove();
    this.onTouchStart();
    this.onKeyDown();
    this.onClick();
  }
}
