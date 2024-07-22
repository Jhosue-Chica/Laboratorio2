import { Component, Input, OnInit,OnDestroy  } from '@angular/core';
import { interval, Subscription } from 'rxjs';


@Component({
  selector: 'app-carrousel',
  standalone: true,
  imports: [],
  templateUrl: './carrousel.component.html',
  styleUrl: './carrousel.component.css'
})
export class CarrouselComponent implements OnInit, OnDestroy {
  @Input() images: string[] = [];
  currentIndex: number = 0;
  autoSlideInterval: number = 3000; // Intervalo de 3 segundos para el cambio automático
  private slideSubscription: Subscription | undefined;
 
  constructor() { }

  ngOnInit(): void {
    if (this.images.length === 0) {
      console.warn('No images provided for the carousel.');
    } else {
      this.startAutoSlide();
    }
  }
  ngOnDestroy(): void {
    if (this.slideSubscription) {
      this.slideSubscription.unsubscribe();
    }
  }

  nextImage(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prevImage(): void {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }
  startAutoSlide(): void {
    this.slideSubscription = interval(this.autoSlideInterval).subscribe(() => this.nextImage());
  }
}


