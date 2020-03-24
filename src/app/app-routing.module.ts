import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { DetailProductComponent } from './components/detail-product/detail-product.component';
import { NotFoundComponent } from './components/not-found/not-found.component';


const routes: Routes = [
  {path: '', redirectTo : 'dashboard', pathMatch : 'full'},
  {path: 'dashboard', component : DashboardComponent},
  {path: 'dashboard/add', component : AddProductComponent},
  {path: 'edit/:id', component : EditProductComponent},
  {path: 'computer/:id', component : DetailProductComponent},
  {path: '**', component : NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
