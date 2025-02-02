import { Routes } from '@angular/router';

import { FormularioEditarComponent } from './components/formulario-editar/formulario-editar.component';
import { ListadoComponent } from './components/listado/listado.component';
import { FormularioAgregarComponent } from './components/formulario-agregar/formulario-agregar.component';

export const routes: Routes = [
    {path: '', component: ListadoComponent, pathMatch: 'full'},
    //@PathVariable
    {path:'editar/:id', component: FormularioEditarComponent},
    {path:'nuevo', component: FormularioAgregarComponent}
];
