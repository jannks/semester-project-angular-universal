import { GalleryImage } from './../../models/galleryImage.model';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ImageService } from '../../services/image.service';
import { Observable } from 'rxjs/Observable';
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
    var id: GalleryImage[];
    this.images = this.ImageServis.getUserImages();

    this.images.subscribe(val => {
      console.log(val);
      id = val;
    }
    );
    var test: GalleryImage = id.Fir;
    console.log(test);
    
    
  }

  ngOnChanges() {
    this.images = this.ImageServis.getUserImages();
  }

}
