import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Plant } from '../models/plant.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-plant-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './plant-card.component.html',
  styleUrls: ['./plant-card.component.css']
})
export class PlantCardComponent {
  @Input() plant!: Plant;
  @Output() viewDetails = new EventEmitter<Plant>();
  @Output() addToCart = new EventEmitter<Plant>();

  constructor() { }

  onDetails(): void {
    this.viewDetails.emit(this.plant);
  }

  onAddToCart(): void {
    this.addToCart.emit(this.plant);
  }
}
