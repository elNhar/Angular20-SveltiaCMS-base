import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SPECIALTIES } from '../../shared/specialties.data';

@Component({
  selector: 'app-services',
  imports: [RouterLink],
  templateUrl: './services.html',
  styleUrl: './services.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Services {
  protected readonly specialties = SPECIALTIES;

  private readonly openIndexes = signal<ReadonlySet<number>>(new Set([0]));

  protected readonly allOpen = computed(() => this.openIndexes().size === this.specialties.length);

  protected readonly toggleAllLabel = computed(() => (this.allOpen() ? 'Cerrar todo' : 'Abrir todo'));

  protected isOpen(index: number): boolean {
    return this.openIndexes().has(index);
  }

  protected toggle(index: number): void {
    this.openIndexes.update((open) => {
      const next = new Set(open);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  }

  protected toggleAll(): void {
    this.openIndexes.set(
      this.allOpen() ? new Set() : new Set(this.specialties.map((_, i) => i))
    );
  }
}
