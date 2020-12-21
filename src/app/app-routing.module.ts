import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListingsPageComponent} from './listings-page/listings-page.component'

const routes: Routes = [
  {path: 'listings', component: ListingsPageComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
