import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SPECIALTIES } from '../../shared/specialties.data';
import content from '../../../content/home.json';

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
  // Edited from the Sveltia CMS admin at /admin — see src/content/home.json.
  protected readonly hero = content.hero;
  protected readonly specialtiesSection = content.specialtiesSection;
  protected readonly isapresSection = content.isapresSection;
  protected readonly instagramSection = content.instagramSection;

  protected readonly specialties = SPECIALTIES;

  protected readonly posts: InstagramPost[] = content.instagramSection.posts.map((caption, i) => ({
    caption,
    tint: `linear-gradient(150deg, ${SPECIALTIES[i % SPECIALTIES.length].tint}, oklch(0.970 0.012 305))`
  }));
}
