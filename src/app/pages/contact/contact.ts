import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { SPECIALTIES } from '../../shared/specialties.data';

interface ContactDetail {
  label: string;
  value: string;
}

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Contact {
  private readonly formBuilder = inject(FormBuilder);

  protected readonly details: ContactDetail[] = [
    { label: 'Dirección', value: 'Av. Providencia 1234, oficina 502, Providencia, Santiago' },
    { label: 'Teléfono', value: '+56 2 2123 4567' },
    { label: 'WhatsApp', value: '+56 9 8765 4321' },
    { label: 'Correo', value: 'hola@centrovitalia.cl' },
    { label: 'Horario', value: 'Lunes a viernes 08:30 – 19:30 · Sábado 09:00 – 14:00' }
  ];

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
