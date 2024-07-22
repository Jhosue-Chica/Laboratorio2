// src/app/plant-detail/plant-detail.component.ts
import { Component, Input } from '@angular/core';
import { Plant } from '../models/plant.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-plant-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './plant-detail.component.html',
  styleUrls: ['./plant-detail.component.css']
})
export class PlantDetailComponent {
  @Input() plant!: Plant;
}
