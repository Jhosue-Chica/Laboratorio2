import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-plant-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './plant-card.component.html',
  styleUrl: './plant-card.component.css'
})
export class PlantCardComponent {
  @Input() plant: any;
  @Output() viewDetails = new EventEmitter<void>();
  @Output() addToCart = new EventEmitter<void>();

  onViewDetails() {
    this.viewDetails.emit();
  }

  onAddToCart() {
    this.addToCart.emit();
  }
}
