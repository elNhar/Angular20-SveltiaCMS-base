import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import content from '../../../content/about.json';

const ACCENTS: [string, string][] = [
  ['oklch(0.93 0.06 200)', 'oklch(0.40 0.10 220)'],
  ['oklch(0.93 0.07 95)', 'oklch(0.42 0.10 75)'],
  ['oklch(0.93 0.06 25)', 'oklch(0.45 0.12 25)'],
  ['oklch(0.93 0.06 160)', 'oklch(0.40 0.10 165)'],
  ['oklch(0.93 0.05 300)', 'oklch(0.43 0.11 300)']
];

@Component({
  selector: 'app-about',
  imports: [NgOptimizedImage],
  templateUrl: './about.html',
  styleUrl: './about.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class About {
  // Edited from the Sveltia CMS admin at /admin — see src/content/about.json.
  protected readonly hero = content.hero;
  protected readonly history = content.history;
  protected readonly milestones = content.milestones;
  protected readonly figures = content.figures;
  protected readonly teamSection = content.team;
  protected readonly valuesSection = content.values;

  protected readonly team = content.team.members.map((member, i) => ({
    ...member,
    tint: ACCENTS[i % ACCENTS.length][0],
    ink: ACCENTS[i % ACCENTS.length][1]
  }));
}
