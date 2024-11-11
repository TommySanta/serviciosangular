import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibreriaComponent } from './components/libreria/libreria.component';
import { PersonasapiComponent } from './components/personasapi/personasapi.component';
import { CochesComponent } from './components/coches/coches.component';
import { PlantillaFuncionSimpleComponent } from './components/plantillafuncionsimple/plantillafuncionsimple.component';
import { PlantillafuncionmultipleComponent } from './components/plantillafuncionmultiple/plantillafuncionmultiple.component';

const routes: Routes = [
  {path: "libreria", component: LibreriaComponent},
  {path: "", component: PersonasapiComponent},
  {path: "personas", component: PersonasapiComponent},
  {path: "coches", component: CochesComponent},
  {path: "plantilla", component: PlantillaFuncionSimpleComponent},
  {path: "plantillamultiple", component: PlantillafuncionmultipleComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
