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
      this.scrollToSection('footer-section');
    } else if (sectionId === 'servicios') {
      this.scrollToSection('plant-card-section');
    } else {
      this.menuClick.emit(sectionId);
    }
  }

  private scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
