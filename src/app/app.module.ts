import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PlantService } from './services/plant.service';

import { PlantCardComponent } from './plant-card/plant-card.component';
import { PlantDetailComponent } from './plant-detail/plant-detail.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CarrouselComponent } from './carrousel/carrousel.component';
import { PlantListComponent } from './plant-list/plant-list.component';

const routes: Routes = [
  { path: '', component: PlantListComponent },
  { path: 'details', component: PlantDetailComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(routes),
    PlantCardComponent,
    PlantDetailComponent,
    ShoppingCartComponent,
    HeaderComponent,
    FooterComponent,
    CarrouselComponent,
    PlantListComponent
  ],
  providers: [PlantService]
})
export class AppModule { }
