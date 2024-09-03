import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'menu1',
    loadComponent: () => import('./menu1/menu1.component').then((m) => m.Menu1Component),
  },
  {
    path: 'registrar-pacientes',
    loadComponent: () => import('./registrar-paciente/registrar-paciente.component').then((m) => m.RegistrarPacienteComponent),
  },
  {
    path: 'administrar-pacientes',
    loadComponent: () => import('./administrar-pacientes/administrar-pacientes.component').then((m) => m.AdministrarPacientesComponent),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
