import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentModel } from '../../../core/models/content.model';

@Component({
  selector: 'app-content-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.scss'
})
export class ContentCardComponent {
  @Input() content!: ContentModel;
}
