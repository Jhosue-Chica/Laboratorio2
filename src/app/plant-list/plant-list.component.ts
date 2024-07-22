// plant-list.component.ts
import { Component, OnInit } from '@angular/core';
import { Plant } from '../models/plant.model';
import { PlantCardComponent } from '../plant-card/plant-card.component';
import { CommonModule } from '@angular/common';
import { PlantDetailComponent } from '../plant-detail/plant-detail.component';

@Component({
  selector: 'app-plant-list',
  standalone: true,
  imports: [PlantCardComponent,PlantDetailComponent,CommonModule],
  templateUrl: './plant-list.component.html',
  styleUrls: ['./plant-list.component.css']
})
export class PlantListComponent implements OnInit {
  plants: Plant[] = [
    // Lista de plantas de ejemplo
    { id: 1, name: 'Aloe Vera', price: 10, description: 'Planta medicinal', imageUrl: '../../aloe-vera.png' },
    { id: 2, name: 'Cactus', price: 15, description: 'Planta resistente', imageUrl: '../../cactus.png' },
    // ... otras plantas
  ];
  selectedPlant: Plant | null = null;
  cart: Plant[] = [];

  constructor() { }

  ngOnInit(): void {}

  onViewDetails(plant: Plant): void {
    this.selectedPlant = plant;
  }

  onAddToCart(plant: Plant): void {
    this.cart.push(plant);
  }
}
