import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutPageComponent } from './shared/pages/about-page/about-page.component';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { ContactPageComponent } from './shared/pages/contact-page/contact-page.component';

// Definicion de rutas
const routes: Routes = [
  // {
  //   path: '',
  //   component: HomePageComponent,
  // },
  {
    path: 'about',
    component: AboutPageComponent,
  },
  {
    path: 'contact',
    component: ContactPageComponent,
  },
  // Hacer llamado a un modulo de rutas con hijos
  {
    path: 'countries',
    loadChildren: () =>
      import('./countries/countries.module').then((m) => m.CountriesModule),
  },
  // Hacer redireccion
  {
    // Ruta comodin
    path: '**',
    redirectTo: 'countries',
  },
];

// Importar y exportar rutas para usarlas
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
