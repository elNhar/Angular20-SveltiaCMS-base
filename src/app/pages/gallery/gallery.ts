import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { SPECIALTIES } from '../../shared/specialties.data';
import content from '../../../content/gallery.json';

interface Photo {
  cat: string;
  caption: string;
  ratio: string;
}

interface DisplayPhoto extends Photo {
  tint: string;
}

@Component({
  selector: 'app-gallery',
  imports: [],
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
  private readonly lightboxCaption = signal<string | null>(null);

  protected readonly photos = computed<DisplayPhoto[]>(() => {
    const cat = this.activeCategory();
    return this.rawPhotos
      .filter((p) => cat === this.categories[0] || p.cat === cat)
      .map((p, i) => ({
        ...p,
        tint: `linear-gradient(150deg, ${SPECIALTIES[i % SPECIALTIES.length].tint}, oklch(0.970 0.012 305))`
      }));
  });

  protected readonly lightbox = computed(() => this.lightboxCaption());

  protected isActive(category: string): boolean {
    return this.activeCategory() === category;
  }

  protected pick(category: string): void {
    this.activeCategory.set(category);
  }

  protected open(caption: string): void {
    this.lightboxCaption.set(caption);
  }

  protected close(): void {
    this.lightboxCaption.set(null);
  }
}
