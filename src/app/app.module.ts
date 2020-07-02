import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { OrdinateurComponent } from './components/ordinateur/ordinateur.component';
import { OrdinateurdetailComponent } from './components/ordinateurdetail/ordinateurdetail.component';
import { AddordinateurComponent } from './components/addordinateur/addordinateur.component';
import { EditordinateurComponent } from './components/editordinateur/editordinateur.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    OrdinateurComponent,
    OrdinateurdetailComponent,
    AddordinateurComponent,
    EditordinateurComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule

    // BrowserAnimationsModule, 
    // CommonModule,
    // ToastrModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
