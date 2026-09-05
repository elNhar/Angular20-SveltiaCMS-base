import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SPECIALTIES } from '../../shared/specialties.data';

interface InstagramPost {
  caption: string;
  tint: string;
}

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Home {
  protected readonly specialties = SPECIALTIES;

  protected readonly isapres = ['Fonasa', 'Banmédica', 'Colmena', 'Consalud', 'Cruz Blanca', 'Nueva Masvida'];

  protected readonly posts: InstagramPost[] = [
    'Taller de lactancia',
    'Nuevo box de kinesiología',
    'Equipo de fonoaudiología',
    'Control sano: qué llevar',
    'Horario de vacaciones',
    'Antes y después de terapia'
  ].map((caption, i) => ({
    caption,
    tint: `linear-gradient(150deg, ${SPECIALTIES[i % SPECIALTIES.length].tint}, oklch(0.970 0.012 305))`
  }));
}
