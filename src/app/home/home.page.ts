import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonLabel, IonButton, IonInput, IonItem, IonCardContent, IonCardTitle } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, NgForm, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    FormsModule,
    IonCardTitle,
    IonCardContent,
    IonItem,
    IonInput,
    IonButton,
    IonLabel,
    IonCardHeader,
    IonCard,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent
  ],
})
export class HomePage {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      const formData = form.value;
      this.http.post<any>('http://dentalregisbr.000.pe/login.php', formData)
        .subscribe(response => {
          if (response.status === 'success') {
            this.router.navigate(['/next-component']);
          } else {
            alert('Credenciales incorrectas');
          }
        }, error => {
          console.error('Error:', error);
        });
    }
  }
  

}
