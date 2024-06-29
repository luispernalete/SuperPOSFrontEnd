import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarranavegacionComponent } from './barranavegacion/barranavegacion.component';
import { GridOpcionesComponent } from './grid-opciones/grid-opciones.component';
import { TabladecompraComponent } from './tabladecompra/tabladecompra.component';
import { CustomerinfoComponent } from './customerinfo/customerinfo.component';
import { TotaldetalleComponent } from './totaldetalle/totaldetalle.component';
import { ButondownComponent } from './butondown/butondown.component';

@NgModule({
  declarations: [
    AppComponent,
    BarranavegacionComponent,
    GridOpcionesComponent,
    TabladecompraComponent,
    CustomerinfoComponent,
    TotaldetalleComponent,
    ButondownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
