import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { ComicComponent } from './components/comic/comic.component';
import { LibreriaComponent } from './components/libreria/libreria.component';
import { ServicesComics } from './services/service.comics';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { ServicePersonas } from './services/service.personas';
import { PersonasapiComponent } from './components/personasapi/personasapi.component';
import { PersonasstandaloneComponent } from './components/personasstandalone/personasstandalone.component';
import { ServiceCoches } from './services/service.coche';
import { CochesComponent } from './components/coches/coches.component';
import { PlantillaFuncionSimpleComponent } from './components/plantillafuncionsimple/plantillafuncionsimple.component';
import { ServicePlantillas } from './services/service.platillas';
import { PlantillafuncionmultipleComponent } from './components/plantillafuncionmultiple/plantillafuncionmultiple.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ComicComponent,
    LibreriaComponent,
    PersonasapiComponent,
    CochesComponent,
    PlantillaFuncionSimpleComponent,
    PlantillafuncionmultipleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    PersonasstandaloneComponent,
  ],
  providers: [ServicesComics, ServicePersonas, ServiceCoches,ServicePlantillas, provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
