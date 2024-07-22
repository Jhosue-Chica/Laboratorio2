import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlantService {
  private plants = [
    { id: 1, name: 'Fern', price: 10.99, image: 'assets/fern.jpg', description: 'A lovely fern.' },
    { id: 2, name: 'Cactus', price: 12.99, image: 'assets/cactus.jpg', description: 'A spiky cactus.' },
    // Añade más plantas según sea necesario
  ];

  constructor() { }

  getPlants() {
    return this.plants;
  }
}
