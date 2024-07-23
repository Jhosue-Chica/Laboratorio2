import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Plant } from '../models/plant.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css'
})
export class ShoppingCartComponent {
    @Input() cart: Plant[] = [];
  
    getTotalPrice(): number {
      return this.cart.reduce((total, plant) => total + plant.price, 0);
    }
}
