import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  @Input() title: string = '';
  @Input() frase: string = '';
  @Input() showContactInfo: boolean = true;

  onSocialMediaClick(platform: string) {
    console.log(`${platform} icon clicked`);
  }
  
}
