import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrdinateurComponent } from './components/ordinateur/ordinateur.component';
import { AddordinateurComponent } from './components/addordinateur/addordinateur.component';
import { OrdinateurdetailComponent} from './components/ordinateurdetail/ordinateurdetail.component';
import { EditordinateurComponent } from './components/editordinateur/editordinateur.component';


const routes: Routes = [
 { path: '', redirectTo: 'ordinateur', pathMatch: 'full'},

  { path: 'ordinateur',  component: OrdinateurComponent },
  { path: 'ordinateur/add',  component: AddordinateurComponent },
  { path: 'ordinateur/:id',  component: OrdinateurdetailComponent },
  { path: 'ordinateur/maj/:id',  component: EditordinateurComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
