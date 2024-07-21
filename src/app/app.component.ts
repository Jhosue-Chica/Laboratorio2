import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlantCardComponent } from './plant-card/plant-card.component';
import { PlantDetailComponent } from './plant-detail/plant-detail.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,PlantCardComponent,PlantDetailComponent,ShoppingCartComponent,HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Laboratorio2';
}
