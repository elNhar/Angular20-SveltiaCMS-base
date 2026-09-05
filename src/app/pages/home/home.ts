import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { NgOptimizedImage } from '@angular/common';
import { SPECIALTIES } from '../../shared/specialties.data';
import content from '../../../content/home.json';

@Component({
  selector: 'app-home',
  imports: [RouterLink, NgOptimizedImage],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Home {
  private sanitizer = inject(DomSanitizer);
  // Edited from the Sveltia CMS admin at /admin — see src/content/home.json.
  protected readonly hero = content.hero;
  protected readonly specialtiesSection = content.specialtiesSection;
  protected readonly isapresSection = content.isapresSection;
  protected readonly instagramSection = content.instagramSection;

  protected readonly specialties = SPECIALTIES;

  protected readonly ingWidgetUrl = this.sanitizer.bypassSecurityTrustResourceUrl(content.instagramSection.widgetUrl);
}
