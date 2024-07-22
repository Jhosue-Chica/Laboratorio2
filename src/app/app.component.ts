import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { PlantCardComponent } from './plant-card/plant-card.component';
import { PlantDetailComponent } from './plant-detail/plant-detail.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CarrouselComponent } from './carrousel/carrousel.component';
import { PlantListComponent } from './plant-list/plant-list.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    PlantCardComponent,
    PlantDetailComponent,
    ShoppingCartComponent,
    HeaderComponent,
    FooterComponent,
    CarrouselComponent,
    PlantListComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const fragment = this.router.url.split('#')[1];
        if (fragment) {
          const element = document.getElementById(fragment);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    });
  }
}
