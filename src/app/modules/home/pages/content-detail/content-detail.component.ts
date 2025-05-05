import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentModel } from '../../../../core/models/content.model';
import dataRaw from '../../../../data/movies.json';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';

@Component({
  selector: 'app-content-detail',
  imports: [
    CommonModule
  ],
  templateUrl: './content-detail.component.html',
  styleUrl: './content-detail.component.scss'
})
export class ContentDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) {}

  allContent: Array<ContentModel> = [];
  content?: ContentModel;

  ngOnInit(): void {
    const title = decodeURIComponent(this.route.snapshot.paramMap.get('title') || '');
    this.allContent = dataRaw as ContentModel[];
    this.content = this.allContent.find(content => content.titulo === title);
  }

  volver(): void {
    this.location.back();
  }
}
