import specialtiesContent from '../../content/specialties.json';

export interface Specialty {
  mark: string;
  name: string;
  tagline: string;
  body: string;
  edades: string;
  duracion: string;
  equipo: string;
  incluye: string[];
  tint: string;
  ink: string;
}

const ACCENTS: [string, string][] = [
  ['oklch(0.93 0.06 200)', 'oklch(0.40 0.10 220)'],
  ['oklch(0.93 0.07 95)', 'oklch(0.42 0.10 75)'],
  ['oklch(0.93 0.06 25)', 'oklch(0.45 0.12 25)'],
  ['oklch(0.93 0.06 160)', 'oklch(0.40 0.10 165)'],
  ['oklch(0.93 0.05 300)', 'oklch(0.43 0.11 300)']
];

export const SPECIALTIES: Specialty[] = specialtiesContent.items.map((s, i) => ({
  ...s,
  tint: ACCENTS[i % ACCENTS.length][0],
  ink: ACCENTS[i % ACCENTS.length][1]
}));
