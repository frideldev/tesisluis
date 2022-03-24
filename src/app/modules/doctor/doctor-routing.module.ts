import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendarCitaComponent } from './pages/agendar-cita/agendar-cita.component';
import { CitasComponent } from './pages/citas/citas.component';
import { HistorialComponent } from './pages/historial/historial.component';

const routes: Routes = [
{
  path:'',
  children:[
    {path:'historial', component:HistorialComponent},
    {path:'agendar-cita', component:AgendarCitaComponent},
    {path:'citas', component:CitasComponent},
  ]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }
