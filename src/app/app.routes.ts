import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DbzComponent } from './pages/dbz/dbz.component';
import { PokemonComponent } from './pages/pokemon/pokemon.component';
import { CocktailsComponent } from './pages/cocktails/cocktails.component';
import { MyApiRoutingModule } from './pages/my-api/my-api-routing.module'; // Importa el módulo de rutas

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'dbz', component: DbzComponent },
  { path: 'pokemon', component: PokemonComponent },
  { path: 'cocteles', component: CocktailsComponent },
  { path: 'my-api', loadChildren: () => import('./pages/my-api/my-api.module').then(m => m.MyApiModule) }, // Carga el módulo de my-api
];

@NgModule({
  imports: [RouterModule.forRoot(routes), MyApiRoutingModule], // Agrega el MyApiRoutingModule aquí
  exports: [RouterModule]
})
export class AppRoutingModule { }

