import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LibraryComponent } from './library/library.component';
import { PharmacyComponent } from './pharmacy/pharmacy.component';
import { BankComponent } from './bank/bank.component';
import { HealthFoodStoreComponent } from './health-food-store/health-food-store.component';
import { UniversityComponent } from './university/university.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LibraryComponent,
    PharmacyComponent,
    BankComponent,
    HealthFoodStoreComponent,
    UniversityComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
