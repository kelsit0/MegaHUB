import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentModel } from '../../../core/models/content.model';
import { ContentCardComponent } from '../content-card/content-card.component';

@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [CommonModule, ContentCardComponent],
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.scss'
})
export class ContentListComponent {
  @Input() contents: ContentModel[] = [];
}
