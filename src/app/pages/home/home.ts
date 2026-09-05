import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
import { SPECIALTIES } from '../../shared/specialties.data';
import { InstagramEmbed } from '../../shared/instagram-embed/instagram-embed';
import content from '../../../content/home.json';

@Component({
  selector: 'app-home',
  imports: [RouterLink, NgOptimizedImage, InstagramEmbed],
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
  protected readonly posts = content.instagramSection.posts;
}
