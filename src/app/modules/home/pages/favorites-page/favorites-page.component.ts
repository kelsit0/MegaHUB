import { Component } from '@angular/core';
import { FavoritesService } from '../../../../services/favorites.service';
import { ContentModel } from '../../../../core/models/content.model';
import { ContentListComponent } from '../../../../shared/components/content-list/content-list.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favorites-page',
  imports: [
    ContentListComponent
  ],
  templateUrl: './favorites-page.component.html',
  styleUrl: './favorites-page.component.scss'
})
export class FavoritesPageComponent {
  public favorites: ContentModel[];

  constructor(public favoritesService:FavoritesService, private route:Router){
    this.favorites=this.favoritesService.getFavorites();
  }

  regresar():void{
    this.route.navigate(['home'])
  }

}
