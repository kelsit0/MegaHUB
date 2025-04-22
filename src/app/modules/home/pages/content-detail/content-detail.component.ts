import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContentModel } from '../../../../core/models/content.model';
import dataRaw from '../../../../data/movies.json'
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-content-detail',
  imports: [
    CommonModule
  ],
  templateUrl: './content-detail.component.html',
  styleUrl: './content-detail.component.scss'
})
export class ContentDetailComponent implements OnInit{
 
  constructor(private route: ActivatedRoute, private backRoute: Router){

  }

  allContent: Array<ContentModel> =[];

  ///para extraer del html
  content?:ContentModel;

  ngOnInit(): void {
    ///recuperamos el title de la url
    const title=decodeURIComponent(this.route.snapshot.paramMap.get('title') || '')
    console.log(title)
    //cargamos lista
    this.allContent = dataRaw as ContentModel[];
    this.content= this.allContent.find(content=> content.titulo===title);
    console.log(this.content)
  }
  ///regresar a home
  volver():void{
    this.backRoute.navigate(['home'])
  }

}

