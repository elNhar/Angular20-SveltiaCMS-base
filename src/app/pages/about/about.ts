import { ChangeDetectionStrategy, Component } from '@angular/core';

interface Milestone {
  year: string;
  text: string;
}

interface Figure {
  n: string;
  label: string;
}

interface TeamMember {
  initials: string;
  name: string;
  role: string;
  bio: string;
  tint: string;
  ink: string;
}

interface Value {
  title: string;
  body: string;
}

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class About {
  protected readonly milestones: Milestone[] = [
    { year: '2012', text: 'Abrimos con dos boxes en Providencia: pediatría y kinesiología.' },
    { year: '2016', text: 'Se suman fonoaudiología, nutrición y psicología infantil.' },
    { year: '2020', text: 'Telemedicina y control remoto durante la pandemia.' },
    { year: '2024', text: 'Nueva sede de 640 m² con nueve especialidades y sala de terapia sensorial.' }
  ];

  protected readonly figures: Figure[] = [
    { n: '28', label: 'profesionales' },
    { n: '9', label: 'especialidades' },
    { n: '14', label: 'años atendiendo' }
  ];

  protected readonly team: TeamMember[] = [
    {
      initials: 'CM',
      name: 'Dra. Carolina Méndez',
      role: 'Pediatría · Directora médica',
      bio: 'Lorem ipsum dolor sit amet. U. de Chile, 2004. Magíster en pediatría del desarrollo.',
      tint: 'oklch(0.93 0.06 200)',
      ink: 'oklch(0.40 0.10 220)'
    },
    {
      initials: 'JR',
      name: 'Dr. Javier Rojas',
      role: 'Neurología infantil',
      bio: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
      tint: 'oklch(0.93 0.07 95)',
      ink: 'oklch(0.42 0.10 75)'
    },
    {
      initials: 'PS',
      name: 'Paula Soto',
      role: 'Fonoaudiología',
      bio: 'Lenguaje y deglución en primera infancia. Diez años en atención temprana.',
      tint: 'oklch(0.93 0.06 25)',
      ink: 'oklch(0.45 0.12 25)'
    },
    {
      initials: 'MI',
      name: 'Matías Ibáñez',
      role: 'Kinesiología',
      bio: 'Kinesiterapia respiratoria pediátrica y rehabilitación motora.',
      tint: 'oklch(0.93 0.06 160)',
      ink: 'oklch(0.40 0.10 165)'
    },
    {
      initials: 'AF',
      name: 'Antonia Fuentes',
      role: 'Nutrición infantil',
      bio: 'Selectividad alimentaria y manejo nutricional en alergias.',
      tint: 'oklch(0.93 0.05 300)',
      ink: 'oklch(0.43 0.11 300)'
    },
    {
      initials: 'RV',
      name: 'Rodrigo Vera',
      role: 'Psicología',
      bio: 'Terapia individual y orientación a padres. Enfoque cognitivo-conductual.',
      tint: 'oklch(0.93 0.06 200)',
      ink: 'oklch(0.40 0.10 220)'
    }
  ];

  protected readonly values: Value[] = [
    {
      title: 'Una sola conversación',
      body: 'El equipo revisa los casos en conjunto cada semana, así no repites la historia en cada box.'
    },
    {
      title: 'Tiempo real de consulta',
      body: 'Cuarenta minutos por control y treinta por sesión de terapia. Sin sobreagenda.'
    },
    {
      title: 'Boleta y bono al día',
      body: 'Documentación lista al salir para que el reembolso en tu Isapre no dependa de un trámite extra.'
    }
  ];
}
