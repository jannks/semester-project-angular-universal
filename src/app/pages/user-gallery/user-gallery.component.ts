import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ImageService } from '../../services/image.service';
import { Observable } from 'rxjs/Observable';
import { GalleryImage } from '../../models/galleryImage.model';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-user-gallery',
  templateUrl: './user-gallery.component.html',
  styleUrls: ['./user-gallery.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class UserGalleryComponent implements OnInit, OnChanges {

  images: Observable<GalleryImage[]>;

  constructor(private ImageServis: ImageService) { }

  ngOnInit() {
    this.images = this.ImageServis.getImages();
  }

  ngOnChanges() {
    this.images = this.ImageServis.getImages();
  }

}
