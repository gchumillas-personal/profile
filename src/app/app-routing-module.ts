import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ViewComponent as HomeComponent } from './views/home/view';
import { ViewComponent as PageNotFoundComponent } from './views/not-found/view';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'home/:lang', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
