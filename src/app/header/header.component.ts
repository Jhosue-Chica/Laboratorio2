import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input() title: string = '';
  @Input() menuItems: { label: string, sectionId: string }[] = [];
  @Output() menuClick = new EventEmitter<string>();

  constructor(private router: Router) {}


  onMenuClick(sectionId: string): void {
    if (sectionId === 'inicio') {
      // Cambia la ruta si estás usando enrutamiento
      this.router.navigate([], { fragment: sectionId });
      
      // Encuentra el elemento y hace scroll
      const element = document.getElementById('footer-section');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      this.menuClick.emit(sectionId);
    }
  }
}
