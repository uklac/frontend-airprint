import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StellarMapPageComponent } from './pages/stellar-map-page/stellar-map-page.component';
import { ErrorPageComponent  } from './pages/error-page/error-page.component';
import { GeometricPostersPagesComponent } from './pages/geometric-posters-pages/geometric-posters-pages.component';

const routes: Routes = [
  { path: 'stellar-editor', component: StellarMapPageComponent, pathMatch: 'full'},
  { path: 'geometric-editor', component: GeometricPostersPagesComponent, pathMatch: 'full'},
  { path: '404', component: ErrorPageComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
