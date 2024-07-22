import { Component } from '@angular/core';
import { PlantService } from '../services/plant.service';
import { PlantCardComponent } from '../plant-card/plant-card.component';

@Component({
  selector: 'app-plant-list',
  standalone: true,
  imports: [PlantCardComponent],
  templateUrl: './plant-list.component.html',
  styleUrl: './plant-list.component.css'
})
export class PlantListComponent {
  plants: any[] = [];

  constructor(private plantService: PlantService) {}

  ngOnInit() {
    this.plants = this.plantService.getPlants();
  }

  handleViewDetails(plant: any) {
    // Lógica para manejar la visualización de detalles
    console.log('View Details:', plant);
  }

  handleAddToCart(plant: any) {
    // Lógica para manejar la adición al carrito
    console.log('Add to Cart:', plant);
  }

}
