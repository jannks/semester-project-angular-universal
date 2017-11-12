import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ImageService } from '../../services/image.service';
import { Observable } from 'rxjs/Observable';
import { GalleryImage } from '../../models/galleryImage.model';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FrontPageComponent implements OnInit, OnChanges {
  images: Observable<GalleryImage[]>; //list of all Images

  constructor(private ImageServis: ImageService) { }

  ngOnInit() {
    this.images = this.ImageServis.getImages();
  }

  ngOnChanges() {
    this.images = this.ImageServis.getImages();
  }

}
