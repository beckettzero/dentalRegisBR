import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-administrar-pacientes',
  templateUrl: './administrar-pacientes.component.html',
  styleUrls: ['./administrar-pacientes.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, IonicModule]
})
export class AdministrarPacientesComponent  implements OnInit {

  pacientes: any = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.loadPacientes();
  }

  loadPacientes() {
    const usuario_id = localStorage.getItem('usuario_id'); // Asumiendo que el usuario_id se guarda en localStorage
    this.http.get<any>(`https://www.dentalregisbr.000.pe/obtener_pacientes.php?usuario_id=${usuario_id}`)
      .subscribe(response => {
        this.pacientes = response;
      });
  }

}
