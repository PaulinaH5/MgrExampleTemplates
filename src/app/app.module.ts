import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { HomeModule } from './home/home.module';
import { LibraryModule } from './library/library.module';
import { PharmacyModule } from './pharmacy/pharmacy.module';
import { BankModule } from './bank/bank.module';
import { HealthFoodStoreModule } from './health-food-store/health-food-store.module';
import { UniversityModule } from './university/university.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LibraryComponent } from './library/library.component';
import { PharmacyComponent } from './pharmacy/pharmacy.component';
import { BankComponent } from './bank/bank.component';
import { HealthFoodStoreComponent } from './health-food-store/health-food-store.component';
import { UniversityComponent } from './university/university.component';

const routes: Routes = [
  // Fallback when no prior route is matched
  { path: '',  component: HomeComponent },
  { path: 'university',  component: UniversityComponent },
  { path: 'library',  component: LibraryComponent },
  { path: 'bank',  component: BankComponent },
  { path: 'health-food-store',  component: HealthFoodStoreComponent },
  { path: 'pharmacy',  component: PharmacyComponent },
];

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
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    HttpModule,
    HomeModule,
    LibraryModule,
    PharmacyModule,
    BankModule,
    HealthFoodStoreModule,
    UniversityModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
