import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentModel } from '../../../core/models/content.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-content-card',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.scss'
})
export class ContentCardComponent {
  @Input() content!: ContentModel;

  constructor(private router:Router){

  }

  verDetalles():void {
    ///enviamos el titulo 
    const title = encodeURIComponent(this.content.titulo)
    this.router.navigate(['detail/',title]);
  }

  guardarContenido():void{

  }
}
