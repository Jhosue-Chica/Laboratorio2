import { Component, Input, Output, EventEmitter } from '@angular/core';


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

  onMenuClick(sectionId: string): void {
    this.menuClick.emit(sectionId);
  }
}
