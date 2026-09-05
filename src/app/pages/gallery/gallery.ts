import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import content from '../../../content/gallery.json';

interface Photo {
  cat: string;
  caption: string;
  ratio: string;
  image: string;
}

@Component({
  selector: 'app-gallery',
  imports: [NgOptimizedImage],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(document:keydown.escape)': 'close()'
  }
})
export class Gallery {
  // Edited from the Sveltia CMS admin at /admin — see src/content/gallery.json.
  protected readonly hero = content.hero;
  protected readonly note = content.note;
  protected readonly categories = content.categories;

  private readonly rawPhotos: Photo[] = content.photos;

  private readonly activeCategory = signal(this.categories[0]);
  private readonly lightboxPhoto = signal<Photo | null>(null);

  protected readonly photos = computed<Photo[]>(() => {
    const cat = this.activeCategory();
    return this.rawPhotos.filter((p) => cat === this.categories[0] || p.cat === cat);
  });

  protected readonly lightbox = computed(() => this.lightboxPhoto());

  protected isActive(category: string): boolean {
    return this.activeCategory() === category;
  }

  protected pick(category: string): void {
    this.activeCategory.set(category);
  }

  protected open(photo: Photo): void {
    this.lightboxPhoto.set(photo);
  }

  protected close(): void {
    this.lightboxPhoto.set(null);
  }
}
