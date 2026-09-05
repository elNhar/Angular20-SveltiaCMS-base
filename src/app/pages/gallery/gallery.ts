import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { SPECIALTIES } from '../../shared/specialties.data';

type Category = 'Todas' | 'Instalaciones' | 'Boxes' | 'Terapias' | 'Equipo';

interface Photo {
  cat: Exclude<Category, 'Todas'>;
  caption: string;
  ratio: string;
}

interface DisplayPhoto extends Photo {
  tint: string;
}

const CATEGORIES: Category[] = ['Todas', 'Instalaciones', 'Boxes', 'Terapias', 'Equipo'];

const PHOTOS: Photo[] = [
  { cat: 'Instalaciones', caption: 'Recepción y sala de espera', ratio: '4/3' },
  { cat: 'Boxes', caption: 'Box de pediatría 1', ratio: '3/4' },
  { cat: 'Terapias', caption: 'Sala de integración sensorial', ratio: '4/3' },
  { cat: 'Instalaciones', caption: 'Pasillo de especialidades', ratio: '4/3' },
  { cat: 'Terapias', caption: 'Sesión de kinesiterapia respiratoria', ratio: '3/4' },
  { cat: 'Boxes', caption: 'Box de oftalmología', ratio: '4/3' },
  { cat: 'Equipo', caption: 'Reunión clínica semanal', ratio: '4/3' },
  { cat: 'Terapias', caption: 'Terapia de lenguaje con material de juego', ratio: '4/3' },
  { cat: 'Instalaciones', caption: 'Rincón de espera infantil', ratio: '3/4' },
  { cat: 'Equipo', caption: 'Equipo de fonoaudiología', ratio: '4/3' },
  { cat: 'Boxes', caption: 'Box de nutrición', ratio: '4/3' },
  { cat: 'Instalaciones', caption: 'Fachada en Av. Providencia', ratio: '3/4' }
];

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
  protected readonly categories = CATEGORIES;

  private readonly activeCategory = signal<Category>('Todas');
  private readonly lightboxCaption = signal<string | null>(null);

  protected readonly photos = computed<DisplayPhoto[]>(() => {
    const cat = this.activeCategory();
    return PHOTOS.filter((p) => cat === 'Todas' || p.cat === cat).map((p, i) => ({
      ...p,
      tint: `linear-gradient(150deg, ${SPECIALTIES[i % SPECIALTIES.length].tint}, oklch(0.970 0.012 305))`
    }));
  });

  protected readonly lightbox = computed(() => this.lightboxCaption());

  protected isActive(category: Category): boolean {
    return this.activeCategory() === category;
  }

  protected pick(category: Category): void {
    this.activeCategory.set(category);
  }

  protected open(caption: string): void {
    this.lightboxCaption.set(caption);
  }

  protected close(): void {
    this.lightboxCaption.set(null);
  }
}
