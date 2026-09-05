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

const RAW_SPECIALTIES: Omit<Specialty, 'tint' | 'ink'>[] = [
  {
    mark: 'PE',
    name: 'Pediatría',
    tagline: 'Control sano, morbilidad y vacunas',
    edades: '0 a 15 años',
    duracion: '40 min',
    equipo: '4 pediatras',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Control del crecimiento y desarrollo, consulta de morbilidad el mismo día y derivación interna cuando hace falta otra especialidad.',
    incluye: [
      'Control sano con curvas de crecimiento y pauta de desarrollo',
      'Consulta de morbilidad con cupos reservados cada mañana',
      'Calendario de vacunas y vacunas opcionales'
    ]
  },
  {
    mark: 'KI',
    name: 'Kinesiología',
    tagline: 'Respiratoria y motora',
    edades: '0 a 18 años',
    duracion: '30 min',
    equipo: '3 kinesiólogos',
    body: 'Kinesiterapia respiratoria en cuadros agudos y rehabilitación motora en sesiones basadas en juego. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    incluye: [
      'KTR en bronquiolitis, asma y neumonía',
      'Rehabilitación motora post lesión o cirugía',
      'Pauta de ejercicios para la casa'
    ]
  },
  {
    mark: 'FO',
    name: 'Fonoaudiología',
    tagline: 'Lenguaje, habla y deglución',
    edades: '18 meses a 18 años',
    duracion: '45 min',
    equipo: '3 fonoaudiólogas',
    body: 'Evaluación y terapia de lenguaje expresivo y comprensivo, dificultades de articulación, tartamudez y trastornos de la deglución. Ut enim ad minim veniam.',
    incluye: [
      'Evaluación de lenguaje con informe para el colegio',
      'Terapia semanal individual',
      'Screening auditivo'
    ]
  },
  {
    mark: 'NU',
    name: 'Nutrición infantil',
    tagline: 'Alimentación y curvas',
    edades: '0 a 18 años',
    duracion: '40 min',
    equipo: '2 nutricionistas',
    body: 'Planes de alimentación por edad, manejo de selectividad alimentaria, alergias alimentarias y seguimiento de malnutrición por exceso o déficit.',
    incluye: [
      'Plan alimentario personalizado',
      'Educación a la familia y minutas semanales',
      'Control cada 6 semanas'
    ]
  },
  {
    mark: 'PS',
    name: 'Psicología',
    tagline: 'Terapia individual y apoyo a padres',
    edades: '3 a 18 años',
    duracion: '50 min',
    equipo: '4 psicólogos',
    body: 'Evaluación y terapia en ansiedad, conducta, duelo y dificultades escolares, con orientación paralela a los padres. Duis aute irure dolor in reprehenderit.',
    incluye: [
      'Evaluación inicial en dos sesiones',
      'Terapia individual semanal o quincenal',
      'Sesiones de orientación parental'
    ]
  },
  {
    mark: 'TO',
    name: 'Terapia ocupacional',
    tagline: 'Integración sensorial y autonomía',
    edades: '2 a 14 años',
    duracion: '45 min',
    equipo: '2 terapeutas',
    body: 'Sala de integración sensorial equipada para trabajar regulación, motricidad fina, grafomotricidad y autonomía en las rutinas diarias.',
    incluye: [
      'Perfil sensorial e informe',
      'Terapia en sala de integración sensorial',
      'Adaptaciones para la sala de clases'
    ]
  },
  {
    mark: 'NR',
    name: 'Neurología infantil',
    tagline: 'Desarrollo, sueño y epilepsia',
    edades: '0 a 18 años',
    duracion: '50 min',
    equipo: '2 neurólogos',
    body: 'Cefaleas, epilepsia, trastornos del sueño, TDAH y trastornos del desarrollo, con coordinación directa con psicología y terapia ocupacional.',
    incluye: [
      'Consulta inicial extendida',
      'Solicitud e interpretación de EEG',
      'Seguimiento farmacológico'
    ]
  },
  {
    mark: 'OF',
    name: 'Oftalmología',
    tagline: 'Screening visual y control de miopía',
    edades: '3 a 18 años',
    duracion: '30 min',
    equipo: '1 oftalmóloga',
    body: 'Screening visual escolar, refracción, control de progresión de miopía y detección temprana de ambliopía y estrabismo.',
    incluye: [
      'Agudeza visual y refracción bajo cicloplejia',
      'Receta de lentes',
      'Control de miopía cada 6 meses'
    ]
  },
  {
    mark: 'DE',
    name: 'Dermatología',
    tagline: 'Piel sensible y dermatitis atópica',
    edades: '0 a 18 años',
    duracion: '30 min',
    equipo: '1 dermatóloga',
    body: 'Dermatitis atópica, acné, lesiones pigmentadas y cuidado de piel sensible, con educación sobre rutina de hidratación y protección solar.',
    incluye: [
      'Consulta con dermatoscopía',
      'Plan de cuidado e hidratación',
      'Control de tratamiento a las 4 semanas'
    ]
  }
];

export const SPECIALTIES: Specialty[] = RAW_SPECIALTIES.map((s, i) => ({
  ...s,
  tint: ACCENTS[i % ACCENTS.length][0],
  ink: ACCENTS[i % ACCENTS.length][1]
}));
