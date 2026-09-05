import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { DomSanitizer, type SafeResourceUrl } from '@angular/platform-browser';
import { SPECIALTIES } from '../../shared/specialties.data';
import content from '../../../content/contact.json';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Contact {
  private readonly formBuilder = inject(FormBuilder);
  private readonly sanitizer = inject(DomSanitizer);

  // Edited from the Sveltia CMS admin at /admin — see src/content/contact.json.
  protected readonly hero = content.hero;
  protected readonly details = content.details;
  protected readonly whatsappButtonLabel = content.whatsappButtonLabel;
  protected readonly callButtonLabel = content.callButtonLabel;
  protected readonly booking = content.booking;
  protected readonly directions = content.directions;

  protected readonly mapSrc: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
    `https://www.google.com/maps?q=${encodeURIComponent(content.directions.mapQuery)}&output=embed`
  );

  protected readonly specialtyNames = SPECIALTIES.map((s) => s.name);

  protected readonly submitted = signal(false);

  protected readonly form = this.formBuilder.nonNullable.group({
    nombre: [''],
    telefono: [''],
    edad: [''],
    especialidad: [''],
    motivo: ['']
  });

  protected submit(): void {
    // Demo only — no request is actually sent anywhere.
    this.submitted.set(true);
  }
}
