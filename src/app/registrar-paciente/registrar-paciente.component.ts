import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registrar-paciente',
  templateUrl: './registrar-paciente.component.html',
  styleUrls: ['./registrar-paciente.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, IonicModule]
})
export class RegistrarPacienteComponent  implements OnInit {
    patientForm!: FormGroup;
  
    constructor(
      private fb: FormBuilder,
      private http: HttpClient,
      private router: Router
    ) { }
  
    ngOnInit() {
      this.patientForm = this.fb.group({
        nombre: ['', Validators.required],
        apellido: ['', Validators.required],
        fecha_nacimiento: ['', Validators.required],
        usuario_id: [localStorage.getItem('usuario_id'), Validators.required] // Asumiendo que el usuario_id se guarda en localStorage al iniciar sesión
      });
    }
  
    submitPatient() {
      this.http.post<any>('https://www.dentalregisbr.000.pe/registrar_pacientes.php', this.patientForm.value)
        .subscribe(response => {
          if (response.status === 'success') {
            console.log('Paciente registrado');
            this.router.navigate(['/menu1']); // Navegar al menú principal tras el registro
          } else {
            console.error('Error al registrar paciente:', response.message);
          }
        });
    }
  }