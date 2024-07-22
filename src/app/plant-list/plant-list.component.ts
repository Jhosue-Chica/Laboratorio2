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
    { id: 1, name: 'Aloe Vera', price: 10, description: 'Planta medicinal', imageUrl: '../../ej-aloe-vera.png' },
    { id: 2, name: 'Cactus', price: 15, description: 'Planta resistente', imageUrl: '../../ej-cactus.png' },
    { id: 3, name: 'Orquídea', price: 25, description: 'Flor exótica', imageUrl: '../../ej-orquidea.png' },
    { id: 4, name: 'Bonsai', price: 40, description: 'Árbol miniatura', imageUrl: '../../ej-bonsai.png' },
    { id: 5, name: 'Helecho', price: 12, description: 'Planta de sombra', imageUrl: '../../ej-helecho.png' },
    { id: 6, name: 'Rosa', price: 20, description: 'Flor clásica', imageUrl: '../../ej-rosa.png' },
    { id: 7, name: 'Lavanda', price: 18, description: 'Planta aromática', imageUrl: '../../ej-lavanda.png' },
    { id: 8, name: 'Suculenta', price: 8, description: 'Planta de bajo mantenimiento', imageUrl: '../../ej-suculenta.png' },
    { id: 10, name: 'Girasol', price: 5, description: 'Flor alegre', imageUrl: '../../ej-girasol.png' }
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
